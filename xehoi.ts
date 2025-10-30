// lib/xehoi.ts

export class XeHoi {
    private _mauSac: string = 'Trắng';
    private _dongCo: string = 'Xăng 1.6L';
    private _kieuGhe: string = 'Ghế nỉ';
    private _cuaTroi: boolean = false;
    private _camera360: boolean = false;

    // Getter
    get mauSac() { return this._mauSac; }
    get dongCo() { return this._dongCo; }
    get kieuGhe() { return this._kieuGhe; }
    get cuaTroi() { return this._cuaTroi; }
    get camera360() { return this._camera360; }

    // Hiển thị thông tin xe
    thongTin() {
        return `
      🚗 Xe hơi đã cấu hình:
      - Màu sắc: ${this._mauSac}
      - Động cơ: ${this._dongCo}
      - Kiểu ghế: ${this._kieuGhe}
      - Cửa trời: ${this._cuaTroi ? 'Có' : 'Không'}
      - Camera 360°: ${this._camera360 ? 'Có' : 'Không'}
    `.trim();
    }
}

export class XeHoiBuilder {
    private xe: XeHoi;

    constructor() {
        this.xe = new XeHoi();
    }

    setMauSac(mau: string): this {
        this.xe['_mauSac'] = mau;
        return this;
    }

    setDongCo(dongCo: string): this {
        this.xe['_dongCo'] = dongCo;
        return this;
    }

    setKieuGhe(ghe: string): this {
        this.xe['_kieuGhe'] = ghe;
        return this;
    }

    themCuaTroi(): this {
        this.xe['_cuaTroi'] = true;
        return this;
    }

    themCamera360(): this {
        this.xe['_camera360'] = true;
        return this;
    }

    build(): XeHoi {
        return this.xe;
    }
}
