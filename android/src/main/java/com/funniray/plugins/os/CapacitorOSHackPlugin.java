package com.funniray.plugins.os;

import com.getcapacitor.*;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.net.*;
import java.util.Enumeration;

@CapacitorPlugin(name = "CapacitorOSHack")
public class CapacitorOSHackPlugin extends Plugin {

    private static String convertByteArrayToMAC(byte[] byteArray) {
        if (byteArray == null) return "00:00:00:00:00:00";

        StringBuilder hex = new StringBuilder();

        // Iterating through each byte in the array
        for (int i = 0; i<byteArray.length; i++) {
            byte b = byteArray[i];
            if (i != 0) hex.append(":");
            hex.append(String.format("%02X", b));
        }

        return hex.toString();
    }

    @PluginMethod
    public void networkInterfaces(PluginCall call) {
        JSArray ret = new JSArray();
        try {
            for (Enumeration<NetworkInterface> interfaces = NetworkInterface.getNetworkInterfaces(); interfaces.hasMoreElements();) {
                NetworkInterface networkInterface = interfaces.nextElement();
                for (InterfaceAddress address : networkInterface.getInterfaceAddresses()) {
                    JSObject interObj = new JSObject();
                    if (address.getAddress() instanceof Inet4Address) {
                        interObj.put("family", "IPv4");
                    } else if (address.getAddress() instanceof Inet6Address) {
                        interObj.put("family", "IPv6");
                    }
                    interObj.put("address", address.getAddress().getHostAddress());
                    interObj.put("mac", convertByteArrayToMAC(networkInterface.getHardwareAddress()));
                    interObj.put("internal", networkInterface.isLoopback());
                    interObj.put("cidr", address.getAddress().getHostAddress() + "/" + address.getNetworkPrefixLength());

                    ret.put(interObj);
                }
            }
        } catch (SocketException e) {
            call.reject(e.getLocalizedMessage());
            return;
        }

        call.resolve(new JSObject().put("interfaces", ret));
    }
}
