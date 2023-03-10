import { Divider, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovie } from "../../../store/action/movie.action";
import { DataGrid } from "@material-ui/data-grid";
import * as dayjs from "dayjs";
import ShowtimeForm from "../../components/showtime-form/showtimeForm";
import swal from "sweetalert";
import { createShowtimeAction } from "../../../store/action/showtime.action";

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: "uppercase",
    marginBottom: theme.spacing(2),
  },
}));

const Showtime = () => {
  const dispatch = useDispatch();
  const { movieListPagination } = useSelector(
    (state) => state.movie
  );
  console.log(movieListPagination);

  

  const classes = useStyles();
  // const { maPhim } = useParams();

  const columns = [
    { field: "id", headerName: "ID", hide: true },
    {
      field: "propertyCode",
      headerName: "propertyCode",
      width: 150,
      // flex: 1.4,
    },
    {
      field: "propertyName",
      headerName: "propertyName",
      width: 150,
      // flex: 1.4,
    },
    {
      field: "projectCode",
      headerName: "projectCode",
      width: 150,
      //  flex: 2
    },
    {
      field: "projectName",
      headerName: "projectName",
      width: 150,
      // flex: 0.9
    },
    {
      field: "propertyPrice",
      headerName: "propertyPrice",
      width: 150,
      // flex: 2.2,
    },
    {
      field: "staffCode",
      headerName: "staffCode",
      width: 150,
      // flex: 1
    },
    {
      field: "staffName",
      headerName: "staffName",
      width: 150,
      //  flex: 1.5
    },
    {
      field: "amountPaid",
      headerName: "amountPaid",
      width: 150,
      //  flex: 1.5
    },
    {
      field: "phaseName",
      headerName: "phaseName",
      width: 150,
      //  flex: 1.5
    },
    {
      field: "paidDate",
      headerName: "paidDate",
      width: 150,
      // flex: 1.5,
      // valueFormatter: (params) => {
      //   return dayjs(params.value).format("HH:mm - DD/MM/YYYY");
      // },
    },
    {
      field: "createdAt",
      headerName: "createdAt",
      width: 150,
      //  flex: 1.5
    },
    {
      field: "updatedAt",
      headerName: "updatedAt",
      width: 150,
      //  flex: 1.5
    },

    // {
    //   field: "action",
    //   headerName: "Action",
    //   flex: 1.5,
    //   renderCell: (params) => {
    //     const onClick = () => {
    //       handleEdit(params.getValue(params.id, "maLichChieu"));
    //     };
    //     return (
    //       <Button
    //         disabled
    //         onClick={onClick}
    //         color="secondary"
    //         variant="contained"
    //       >
    //         Sửa
    //       </Button>
    //     );
    //   }
    // }
  ];

  const renderShowtime = () => {
    
    return movieListPagination?.map((l, index) => {
      return {
        id: index,
        projectCode: l.projectCode,
        projectName: l.projectName,
        propertyCode: l.propertyCode,
        propertyName: l.propertyName,
        propertyPrice: l.propertyPrice,
        staffCode: l.staffCode,
        staffName: l.staffName,
        updatedAt: l.updatedAt,

      };
    });
  };
  

  const handleSubmit = async (values) => {
    const data = {
      ...values,
      ngayChieuGioChieu: dayjs(values.ngayChieuGioChieu).format(
        "DD/MM/YYYY HH:mm:ss"
      ),
    };
    return await dispatch(createShowtimeAction(data)).then((r) => {
      console.log(r);
      if (r.status === 200) {
        swal({
          title: "Success!",
          text: "Thêm phim thành công",
          icon: "success",
          button: false,
          timer: 2000,
        });
        // dispatch(getDetailMovie(maPhim));
        return true;
      } else {
        swal({
          title: "Unsuccess!",
          text: r.data,
          icon: "error",
          buttons: "OK",
          dangerMode: true,
        });
        return false;
      }
    });
  };

  // const handleEdit = (maLichChieu) => {
  //   const showtime = lichChieu.find((l) => l.maLichChieu === maLichChieu);
  //   dispatch(setShowtimeDetail(showtime));
  // };

  // useEffect(() => {
  //   dispatch(getDetailMovie(maPhim));
  // }, []);

  return (
    <div sx={{ height: 520, width: "100%" }}>
      <Typography
        className={classes.title}
        variant="h4"
        align="center"
        color="secondary"
      >
        Thông tin dự án {movieListPagination[0].projectName}
      </Typography>

      <Divider />

      {/* <ShowtimeForm maPhim={maPhim} handleSubmit={handleSubmit} /> */}

      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={ renderShowtime()}
          columns={columns}
          pageSize={5}
          rowHeight={35}
          disableColumnMenu
        />
      </div>
    </div>
  );
};

export default Showtime;
