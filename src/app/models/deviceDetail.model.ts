export class DeviceDetail {
    MacId: string
    CRC: string
    DeviceType: DeviceType
    OSIndex: string
    SoftwareVersion: string
    LockUntil: Date
    BanUntil: Date
    Parameters : Parameter[]
    constructor(
        macId: string,
        crc: string,
        deviceType: DeviceType,
        osIndex: string,
        swVersion: string,
        lockUntil: Date,
        banUntil: Date,
        parameters: Parameter[]
    ){
        this.MacId = macId;
        this.CRC = crc;
        this.DeviceType = deviceType;
        this.OSIndex = osIndex;
        this.SoftwareVersion = swVersion;
        this.LockUntil = lockUntil;
        this.BanUntil = banUntil;
        this.Parameters = parameters;
    }
}

export class DeviceType {
    TypeName : string
}

export class Parameter {
    ParameterName : string
    IsExclusive : boolean
}

export class NewDeviceRequest {
    DeviceType: DeviceType
    MacId: string
    CRC: string
}

