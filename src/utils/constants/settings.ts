export enum StatusCode {
    Success = 200 || 201 || 202,
    Error = 404,
    Server = 500,
}

export enum API {
    GET_ALL_MOVIE = '/QuanLyPhim/LayDanhSachPhim',
    GET_MOVIE_DETAIL = "/QuanLyRap/LayThongTinLichChieuPhim",
    GET_MOVIE_WITH_DATE = "/QuanLyPhim/LayDanhSachPhimTheoNgay",
    GET_ALL_PAGINATION = "QuanLyPhim/LayDanhSachPhimPhanTrang",
    GET_CINEMA_LIST = "/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
    GET_CINEMA_INFO = "/QuanLyRap/LayThongTinCumRapTheoHeThong",
    EDIT_MOVIE = "/QuanLyPhim/CapNhatPhimUpload",
    DELETE_MOVIE = "/QuanLyPhim/XoaPhim",
    SEARCH_MOVIE = "/QuanLyPhim/LayDanhSachPhim",
    GET_ALL_SEAT = "/QuanLyDatVe/LayDanhSachPhongVe",
    BOOKING_TICKET = "/QuanLyDatVe/DatVe",
    CREATE_SHOWTIME = "/QuanLyDatVe/TaoLichChieu",
}

export enum ROUTES {
    /**
     * Client
     */
    HOME = "/",
    ABOUT = "/about",
    MOVIEDETAIL = "/movie",
    CHECKOUT = "/checkout",
    PROFILE = "/profile/:taiKhoan",
    MOVIELIST = "/movielist",

    /**
     * Form
     */
    LOGIN = "/login",
    REGISTER = "/register",
    /**
     * Admin
     */
    DASHBOARD = "/admin/dashboard",
    USERMANAGEMENT = "/admin/usermanagement",
    USERDETAIL = "/admin/user/:taiKhoan",
    PROFILEADMIN = "/admin/profileadmin",
    MOVIEMANAGEMENT = "/admin/moviemanagement",
    FORMADMIN = "/admin/formadmin",
    SHOWTIME = "/admin/showtime",

    NOTFOUND = "/notfound",
}

export enum ActionType {
    update,
    creation,
    delete,
    view,
}

export const fakeApi = 'http://localhost:8000'
