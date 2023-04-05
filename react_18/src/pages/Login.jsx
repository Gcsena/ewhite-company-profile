import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Button,
  Image,
  Input,
  Carousel,
  Form,
  Checkbox,
  Modal,
  Select,
} from "antd";
import iconSmall from "../images/Logotari.svg";
import { useNavigate } from "react-router-dom";
// import Registrasi from "./Registrasi";
import { Route } from "react-router-dom";
import { blue } from "@mui/material/colors";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function LoginNew() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const [modalText, setModalText] = useState("Content of the modal");
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleOk = () => {
    setModalText("Berhasil buat member!");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const [register, setRegister] = useState(false);
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const storedJwt = localStorage.getItem("token");
  const [jwt, setJwt] = useState(storedJwt || null);

  const handleOnClick = (e) => {
    e.preventDefault();
    const user = {
      email: username,
      password: password,
    };
    console.log(user);
    axios({
      method: "post",
      url: "https://api.drewhite.com/auth/login",
      data: {
        email: username,
        password: password,
      },
    }).then((response) => {
      setJwt(response.data.token);
      localStorage.setItem("token", response.data.token);
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
      localStorage.setItem("refresh", response.data.refresh);
      localStorage.setItem("role", response.data.role);
      console.log(response);
      // window.location = "/official/overview";
      navigate("/overview");
    });
  };

  // =====================================================

  const [input, setData] = useState({
    name: "",
    address: "",
    email: "",
    phone_num: "",
    membership: "",
    password: "",
    confirmpassword: "",
    subdistrict: "",
  });

  function handle(id, value) {
    setData((input) => ({
      ...input,
      [id]: value,
    }));
    console.log("newData", input);
  }

  const url_req = "https://api.drewhite.com/auth/create";
  const [regist, setRegist] = useState([]);
  const daftar = (e) => {
    console.log(input);
    e.preventDefault();
    axios({
      method: "post",
      url: url_req,
      data: input,
    }).then((res) => {
      console.log(res.data);
      handleOk();
    });
  };
  // useEffect(() => {
  //   daftar();
  // }, []);
  // const handleOnClick = () => navigate("/overview");
  // const daftar = (e) =>{
  //   try
  // }
  return (
    <main>
      <Row style={{ backgroundColor: "#DD3D59" }}>
        <Col md={12} sm={0} xs={0}>
          <Row justify="center" align="middle" style={{ height: "100vh" }}>
            <Col md={24} sm={0} xs={0}>
              <Image src={iconSmall} preview={false} />
            </Col>
          </Row>
        </Col>
        <Col md={12} sm={24} xs={24}>
          <Row
            justify="center"
            align="middle"
            style={{ height: register == false ? "100vh" : "145vh" }}
          >
            <Col
              md={20}
              sm={20}
              xs={20}
              style={{
                height: register == false ? "32rem" : "45rem",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <Row justify="center" align="middle" style={{ height: "9rem" }}>
                <Col md={24} sm={24} xs={24}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h1
                      style={{
                        fontFamily: "Light",
                        fontWeight: "bold",
                        fontSize: "34px",
                        color: '#212121',
                        display: register == false ? "flex" : "none",
                      }}
                    >
                      Login
                    </h1>
                    <h1
                      style={{
                        fontFamily: "Light",
                        fontWeight: "bold",
                        fontSize: "34px",
                        color: '#212121',
                        display: register == false ? "none" : "flex",
                      }}
                    >
                      Registrasi
                    </h1>
                  </div>
                </Col>
              </Row>
              <Row justify="center" align="middle">
                <Col md={24} sm={24} xs={24}>
                  <Form
                    // name="basic"
                    // labelCol={{
                    //   span: 8,
                    // }}
                    // wrapperCol={{
                    //   span: 16,
                    // }}
                    // style={{
                    //   maxWidth: 600,
                    // }}
                    // initialValues={{
                    //   remember: true,
                    // }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Row>
                      <Col
                        md={24}
                        sm={24}
                        span={2}
                        offset={2}
                        style={{
                          display: register == false ? "block" : "none",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 600,
                          }}
                        >
                          Username
                        </p>
                      </Col>
                    </Row>
                    <Row justify="center">
                      <Col
                        md={20}
                        sm={20}
                        style={{
                          display: register == false ? "block" : "none",
                        }}
                      >
                        <Form.Item
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                          onChange={(e) => setusername(e.target.value)}
                        >
                          <Input placeholder="Input Username" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        md={24}
                        sm={24}
                        span={2}
                        offset={2}
                        style={{
                          display: register == false ? "block" : "none",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 600,
                          }}
                        >
                          Password
                        </p>
                      </Col>
                    </Row>
                    <Row justify="center">
                      <Col
                        md={20}
                        sm={20}
                        style={{
                          display: register == false ? "block" : "none",
                        }}
                      >
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                          onChange={(e) => setpassword(e.target.value)}
                        >
                          <Input.Password placeholder="Input Password" />
                        </Form.Item>
                      </Col>
                    </Row>
                    {/* <h3
            style={{
              fontFamily: "light",
              fontWeight: "300",
              fontSize: "16px",
              color: "black",
              marginTop: "15px",
              textAlign: "center",
            }}
          >
            Registrasi
          </h3> */}
                    <Row
                      style={{ display: register == false ? "none" : "flex" }}
                    >
                      <Col md={24} sm={24} xs={24}>
                        <form>
                          <Row justify="center">
                            <Col md={20} sm={20}>
                              <Form.Item>
                                <Input
                                  onChange={(e) =>
                                    handle("name", e.target.value)
                                  }
                                  value={input.name}
                                  id="name"
                                  name="name"
                                  placeholder="Nama"
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row justify="center">
                            <Col md={20} sm={20}>
                              <Form.Item>
                                <Input
                                  onChange={(e) =>
                                    handle("address", e.target.value)
                                  }
                                  value={input.address}
                                  id="address"
                                  name="address"
                                  placeholder="Alamat"
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row justify="center">
                            <Col md={20} sm={20}>
                              <Form.Item>
                                <Select
                                  placeholder="Membership"
                                  defaultValue="BASIC"
                                  style={{
                                    width: "100%",
                                  }}
                                  onChange={(value, option) =>
                                    handle("membership", value)
                                  }
                                  id="membership"
                                  value={input.membership}
                                  options={[
                                    {
                                      id: "basic",
                                      value: "BASIC",
                                      label: "Basic",
                                    },
                                    {
                                      id: "pro",
                                      value: "PRO",
                                      label: "Pro",
                                    },
                                    {
                                      id: "master",
                                      value: "MASTER",
                                      label: "Master",
                                    },
                                  ]}
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row justify="center">
                            <Col md={20} sm={20}>
                              <Form.Item>
                                <Select
                                  placeholder="Kota"
                                  defaultValue="Jakarta"
                                  onChange={(value, option) =>
                                    handle("subdistrict", value)
                                  }
                                  id="subdistrict"
                                  value={input.subdistrict}
                                  style={{
                                    width: "100%",
                                  }}
                                  //   onChange={handleChange}
                                  options={[
                                    {
                                      id: "jakarta",
                                      value: "Jakarta",
                                      label: "Jakarta",
                                    },
                                    {
                                      id: "bandung",
                                      value: "Bandung",
                                      label: "Bandung",
                                    },
                                    {
                                      id: "bekasi",
                                      value: "Bekasi",
                                      label: "Bekasi",
                                    },
                                    {
                                      id: "banten",
                                      value: "Banten",
                                      label: "Banten",
                                    },
                                    {
                                      id: "bogor",
                                      value: "Bogor",
                                      label: "Bogor",
                                    },
                                    {
                                      id: "surabaya",
                                      value: "Surabaya",
                                      label: "Surabaya",
                                    },
                                    {
                                      id: "jambi",
                                      value: "Jambi",
                                      label: "Jambi",
                                    },
                                    {
                                      id: "aceh",
                                      value: "Aceh",
                                      label: "Aceh",
                                    },
                                    {
                                      id: "kalimantan barat",
                                      value: "Kalimantan Barat",
                                      label: "Kalimantan Barat",
                                    },
                                    {
                                      id: "medan",
                                      value: "Medan",
                                      label: "Medan",
                                    },
                                  ]}
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row justify="center">
                            <Col md={20} sm={20}>
                              <Form.Item>
                                <Input
                                  //   onChange={(e) => handle(e)}
                                  //   value={input.email}
                                  onChange={(e) =>
                                    handle("email", e.target.value)
                                  }
                                  value={input.email}
                                  id="email"
                                  name="email"
                                  placeholder="Email"
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row justify="center">
                            <Col md={20} sm={20}>
                              <Form.Item>
                                <Input
                                  onChange={(e) =>
                                    handle("phone_num", e.target.value)
                                  }
                                  value={input.phone_num}
                                  id="phone_num"
                                  name="phone_num"
                                  placeholder="Nomor HP"
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row justify="center">
                            <Col md={20} sm={20}>
                              <Form.Item>
                                <Input
                                  onChange={(e) =>
                                    handle("password", e.target.value)
                                  }
                                  value={input.password}
                                  id="password"
                                  name="password"
                                  type="password"
                                  placeholder="Password"
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row justify="center">
                            <Col md={20} sm={20}>
                              <Form.Item>
                                <Input
                                  onChange={(e) =>
                                    handle("confirmpassword", e.target.value)
                                  }
                                  value={input.confirmpassword}
                                  id="confirmpassword"
                                  name="confirmpassword"
                                  type="password"
                                  placeholder="Ulangi Password"
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          {/* <Row justify="center">
                            <Col md={24}>
                              <Button onClick={(e) => daftar(e)}>Daftar</Button>
                            </Col>
                          </Row> */}
                        </form>
                      </Col>
                    </Row>
                    <Row justify="center">
                      <Col
                        md={20}
                        sm={20}
                        style={{
                          display: register == false ? "block" : "none",
                        }}
                      >
                        <Form.Item
                        // wrapperCol={{
                        //   offset: 8,
                        //   span: 16,
                        // }}
                        >
                          {/* <a href="/overview"> */}
                          <Button
                            style={{
                              width: "100%",
                              backgroundColor: "#DD3D59",
                              boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
                              marginTop: "2rem",
                              marginBottom: "2rem",
                            }}
                            type="primary"
                            htmlType="submit"
                            onClick={handleOnClick}
                          >
                            Login
                          </Button>
                        </Form.Item>
                        {/* <button type="submit" onClick={handleOnClick}>
                          Login
                        </button> */}
                        {/* </a> */}
                      </Col>
                    </Row>
                    <Row justify="center">
                      <Col
                        md={20}
                        sm={20}
                        style={{
                          display: register == false ? "none" : "block",
                        }}
                      >
                        <Form.Item
                        // wrapperCol={{
                        //   offset: 8,
                        //   span: 16,
                        // }}
                        >
                          {/* <a href="/overview"> */}
                          <Button
                            style={{
                              width: "100%",
                              backgroundColor: "#DD3D59",
                              boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
                              marginTop: "2rem",
                            }}
                            type="primary"
                            htmlType="submit"
                            // onClick={(e) => daftar(e)}
                            onClick={function (e) {
                              daftar(e);
                              showModal(e);
                            }}
                          >
                            Daftar
                          </Button>
                        </Form.Item>
                        {/* <button type="submit" onClick={handleOnClick}>
                          Login
                        </button> */}
                        {/* </a> */}
                      </Col>
                    </Row>
                    <Row justify="start">
                      <Col
                        md={8}
                        sm={8}
                        xs={8}
                        span={2}
                        offset={2}
                        style={{
                          display: register == false ? "block" : "none",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            fontSize: "12px",
                          }}
                        >
                          Belum punya akun?
                        </p>
                      </Col>

                      <Col
                        md={6}
                        sm={8}
                        xs={8}
                        span={2}
                        offset={2}
                        style={{
                          display: register == false ? "flex" : "none",
                        }}
                        onClick={setRegister}
                      >
                        <p
                          style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            fontSize: "12px",
                            color: "red",
                          }}
                        >
                          Daftar disini!
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        md={10}
                        sm={10}
                        xs={10}
                        span={2}
                        offset={2}
                        style={{
                          display: register == false ? "none" : "block",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            fontSize: "13px",
                          }}
                        >
                          Sudah punya akun?
                        </p>
                      </Col>
                      <Col
                        md={6}
                        sm={8}
                        xs={8}
                        span={2}
                        offset={2}
                        style={{
                          display: register == false ? "none" : "block",
                        }}
                        onClick={setRegister}
                      >
                        <p
                          style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 300,
                            fontSize: "13px",
                            color: "red",
                          }}
                        >
                          Login
                        </p>
                      </Col>
                    </Row>
                    {/*
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item> */}
                    {/* </Form> */}
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Modal
          // title="Add New Product"
          open={open}
          width={700}
          footer={null}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <handle>
            <Row justify="center">
              <Col md={20} sm={20} style={{ textAlign: "center" }}>
                <h3>Berhasil Mendaftar Dengan Informasi</h3>
              </Col>
              <Col md={20} sm={20} style={{ textAlign: "center" }}>
                <h4
                  style={{
                    fontFamily: "Light",
                    fontWeight: "200px",
                    fontSize: "18px",
                    color: "red",
                  }}
                >
                  Nama : {input.name}
                </h4>
              </Col>
              <Col md={20} sm={20} style={{ textAlign: "center" }}>
                <h4
                  style={{
                    fontFamily: "Light",
                    fontWeight: "200px",
                    fontSize: "18px",
                    color: "red",
                  }}
                >
                  Alamat : {input.address}
                </h4>
              </Col>
              <Col md={20} sm={20} style={{ textAlign: "center" }}>
                <h4
                  style={{
                    fontFamily: "Light",
                    fontWeight: "200px",
                    fontSize: "18px",
                    color: "red",
                  }}
                >
                  Tipe Member : {input.membership}
                </h4>
              </Col>
              <Col md={20} sm={20} style={{ textAlign: "center" }}>
                <h4
                  style={{
                    fontFamily: "Light",
                    fontWeight: "200px",
                    fontSize: "18px",
                    color: "red",
                  }}
                >
                  Sub District : {input.subdistrict}
                </h4>
              </Col>
              <Col md={20} sm={20} style={{ textAlign: "center" }}>
                <h4
                  style={{
                    fontFamily: "Light",
                    fontWeight: "200px",
                    fontSize: "18px",
                    color: "red",
                  }}
                >
                  Nomor HP : {input.phone_num}
                </h4>
              </Col>
            </Row>
          </handle>
        </Modal>
      </Row>
    </main>
  );
}
