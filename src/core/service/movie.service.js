import axios from "axios";
import { DOMAIN } from "../global/constant";
// import { TOKEN } from "./user.service";

class MovieService {
  getMovieListPagination = (groupID, pageNumber, itemPerPageNumber) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${groupID}&soTrang=${pageNumber}&soPhanTuTrenTrang=${itemPerPageNumber}`,
      method: "GET",
    });
  };

  deleteMovie = (data) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/XoaPhim?MaPhim=${data}`,
      method: "DELETE",
    });
  };

  addMovie = (data) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/ThemPhimUploadHinh`,
      method: "POST",
      data,
    });
  };

  updateMovie = (data) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/CapNhatPhimUpload`,
      method: "POST",
      data,
    });
  };
  getTransaction = () => {
    return axios({
      url: "https://34.125.211.126:3000/api/transaction/find-all?limit=10&page=1",
      method: "GET",
    });
  };
}

export const movieService = new MovieService();
