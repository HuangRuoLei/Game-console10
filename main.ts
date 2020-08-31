//% color="#006400" weight=2 0 icon="\uf1b9" block="拓宇小车"
namespace TuoYuCar {

    export enum ultrasonicState{
        //% blockId="OFF" block="关闭"
        Off = 0,
        //% blockId="Open" block="开启"
        Open = 1
    }
    export enum DisplayChine{
        //% blockId="wo" block="我"
        wo = 0,
        //% blockId="ni" block="你"
        ni = 1,
        //% blockId="tuo" block="拓"
        tuo,
        //% blockId="yu" block="宇"
        yu,
        //% blockId="ke" block="科"
        ke,
        //% blockId="ji" block="技"
        ji

    }
    export enum DisplayEnglish{
        a = 0, b, c, d, e, f, g, h, i, j,
        k, l, m, n, o, p, q, r, s, t,
        u, v, w, x, y, z, A, B, C, D,
        E, F, G, H, I, J, K, L, M, N,
        O, P, Q, R, S, T, U, V, W, X, Y, Z
    }
    export enum x{
        //% blockId="Zero" block="0"
        Zero = 0,
        //% blockId="Two" block="2"
        Two,
        //% blockId="Four" block="4"
        four,
        //% blockId="Six" block="6"
        Six
    }
    export enum y{
        //% blockId="_0" block="0"
        _0 = 0,
        //% blockId="_8" block="8"
        _8,
        //% blockId="_16" block="16"
        _16,
        //% blockId="_24" block="24"
        _24,
        //% blockId="_32" block="32"
        _32,
        //% blockId="_40" block="40"
        _40,
        //% blockId="_48" block="48"
        _48,
        //% blockId="_56" block="56"
        _56,
        //% blockId="_64" block="64"
        _64,
        //% blockId="_72" block="72"
        _72,
        //% blockId="_80" block="80"
        _80,
        //% blockId="_88" block="88"
        _88,
        //% blockId="_96" block="96"
        _96,
        //% blockId="_104" block="104"
        _104,
        //% blockId="_112" block="112"
        _112,
        //% blockId="_120" block="120"
        _120
    }
    function IICWrite(value:number,value1:number) {
        
        pins.i2cWriteNumber(value, value1, NumberFormat.UInt8LE);
    }
    function IICWriteBuf(value: number, value1: number, value2: number, value3: number, value4: number) {
        let buf = pins.createBuffer(4);
        buf[0] = value1;
        buf[1] = value2;
        buf[2] = value3;
        buf[3] = value4;
        
        pins.i2cWriteBuffer(value, buf);
    }
    function SPIWrite(value: number) {
        pins.spiPins(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2);
        pins.spiFormat(8, 3);
        pins.spiFrequency(100000);
        pins.spiWrite(value);
    }
    /**
     * 选择以打开或关闭小车超声波功能
     * @param index
    */
    //% blockId=TuoYuCar_Chao_Sheng_Bo block="超声波|%index"
    //% weight=101
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Chao_Sheng_Bo(index: ultrasonicState):void {
        
        switch (index) {
            case ultrasonicState.Off: IICWrite(65, 1); break;
            case ultrasonicState.Open: IICWrite(65, 2); break;
        }
    }

    /**
     * 调用此将返回超声波的所测到的距离
     * @param index
    */
    //% blockId=TuoYuCar_Read_Chao_Sheng_Bo block="读取超声波测到的距离(cm)"
    //% weight=100
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Read_Chao_Sheng_Bo(): number {
        let length;
        length=pins.i2cReadNumber(65, NumberFormat.Int8LE);
        return length;
    }
    /**
     * 选择以打开或关闭小车颜色传感器功能
     * @param index
    */

    //% blockId=TuoYuCar_Yan_She_Chuan_Gan_Qi block="颜色传感器|%index"
    //% weight=99
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Yan_She_Chuan_Gan_Qi(index:ultrasonicState):void {
        switch (index) {
            case ultrasonicState.Off: IICWrite(67, 1); break;
            case ultrasonicState.Open: IICWrite(67, 2); break;
        }
    }


    /**
     * 选择以打开或关闭小车声音传感器功能
     * @param index
    */

    //% blockId=TuoYuCar_Sheng_Ying_Chuan_Gan_Qi block="声音传感器|%index"
    //% weight=97
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Sheng_Ying_Chuan_Gan_Qi(index:ultrasonicState):void {
        switch (index) {
            case ultrasonicState.Off: IICWrite(68, 1); break;
            case ultrasonicState.Open: IICWrite(68, 2); break;
        }
    }
    /**
     * 选择以打开或关闭小车语音识别传感器功能
     * @param index
    */
    //% blockId=TuoYuCar_Yu_Ying_Shi_Bie_Chuan_Gan_Qi block="语音识别传感器|%index"
    //% weight=95
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function Yu_Ying_Shi_Bie_Chuan_Gan_Qi(index: ultrasonicState):void {
        
        switch (index) {
            case ultrasonicState.Off: SPIWrite(0); break;
            case ultrasonicState.Open: SPIWrite(1); break;
        }
    }
    /**
     * 选择以打开或关闭小车显示屏显示中文功能
     * @param index
    */
    //% blockId=TuoYuCar_OLEDShowChine block="显示中文|%index|在横坐标x= %index2|纵坐标y= %index3|处显示 %index1"
    //% weight=93
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
    export function OLEDShowChine(index:ultrasonicState,index2:x,index3:y,index1:DisplayChine):void {
        switch (index) {
            case ultrasonicState.Off: IICWriteBuf(69,1,0,0,0); break;
            case ultrasonicState.Open: {
                let buf1 = pins.createBuffer(3);
                switch (index2) {
                    case x.Zero: buf1[0]=1; break;
                    case x.Two: buf1[0]=2; break;
                    case x.four: buf1[0]=3; break;
                    case x.Six: buf1[0]=4; break;
                }
                switch (index3) {
                    case y._0:  buf1[1]=1; break;
                    case y._8:  buf1[1]=2; break;
                    case y._16: buf1[1]=3; break;
                    case y._24: buf1[1]=4; break;
                    case y._32: buf1[1]=5; break;
                    case y._40: buf1[1]=6; break;
                    case y._48: buf1[1]=7; break;
                    case y._56: buf1[1]=8; break;
                    case y._64: buf1[1]=9; break;
                    case y._72: buf1[1]=10; break;
                    case y._80: buf1[1]=11; break;
                    case y._88: buf1[1]=12; break;
                    case y._96: buf1[1]=13; break;
                    case y._104: buf1[1]=14; break;
                    case y._112: buf1[1]=15; break;
                }

                switch (index1) {
                    case DisplayChine.wo: buf1[2]=1; break;
                    case DisplayChine.ni: buf1[2]=2; break;
                }
                IICWriteBuf(69, 2, buf1[0], buf1[1], buf1[2]);
            }; break;
        }
    }
    /**
     * 选择以打开或关闭小车显示屏显示字母功能
     * @param index
    */
    //% blockId=TuoYuCar_OLEDShowEnglish block="显示字母|%index|在横坐标X= %index1|纵坐标y= %index2|处显示 %index3"
    //% weight=92
    //% blockGap=10
    //% color="#006400"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
    export function OLEDShowEnglish(index:ultrasonicState,index1:x,index2:y,index3:DisplayEnglish):void {
        switch (index) {
            case ultrasonicState.Off: IICWriteBuf(70,1,0,0,0); break;
            case ultrasonicState.Open: {
                let buf1 = pins.createBuffer(3);
                switch (index1) {
                    case x.Zero: buf1[0]=1; break;
                    case x.Two: buf1[0]=2; break;
                    case x.four: buf1[0]=3; break;
                    case x.Six: buf1[0]=4; break;
                }
                switch (index2) {
                    case y._0:  buf1[1]=1; break;
                    case y._8:  buf1[1]=2; break;
                    case y._16: buf1[1]=3; break;
                    case y._24: buf1[1]=4; break;
                    case y._32: buf1[1]=5; break;
                    case y._40: buf1[1]=6; break;
                    case y._48: buf1[1]=7; break;
                    case y._56: buf1[1]=8; break;
                    case y._64: buf1[1]=9; break;
                    case y._72: buf1[1]=10; break;
                    case y._80: buf1[1]=11; break;
                    case y._88: buf1[1]=12; break;
                    case y._96: buf1[1]=13; break;
                    case y._104: buf1[1]=14; break;
                    case y._112: buf1[1]=15; break;
                    case y._120: buf1[1]=16; break;
                }
                switch (index3) {
                    case DisplayEnglish.a: buf1[2]=1; break;
                    case DisplayEnglish.b: buf1[2]=2; break;
                    case DisplayEnglish.c: buf1[2]=3; break;
                    case DisplayEnglish.d: buf1[2]=4; break;
                }
                IICWriteBuf(70, 2, buf1[0], buf1[1], buf1[2]);
            }; break;
        }
    }
}
