export class DeviceDetail {
    MacId: string
    CRC: string
    DeviceType: string
    OSIndex: string
    SoftwareVersion: string
    LockUntil: Date
    BanUntil: Date
    constructor(
        macId: string,
        crc: string,
        deviceType: string,
        osIndex: string,
        swVersion: string,
        lockUntil: Date,
        banUntil: Date
    ){
        this.MacId = macId;
        this.CRC = crc;
        this.DeviceType = deviceType;
        this.OSIndex = osIndex;
        this.SoftwareVersion = swVersion;
        this.LockUntil = lockUntil;
        this.BanUntil = banUntil;
    }
}