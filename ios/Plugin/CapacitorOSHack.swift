import Foundation

@objc public class CapacitorOSHack: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
