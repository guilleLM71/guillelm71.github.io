import React, { Component } from "react";
//import swal from "sweetalert";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import {Typed} from "../../lib/typed/typed.js";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../../scss/bootstrap/scss/bootstrap.scss";
import Carousel from "react-bootstrap/Carousel";
import ReactTypingEffect from "react-typing-effect";
import ModalBasico from "./ModalBasico";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Image } from "react-bootstrap";

//import "./Fakenews.css";
export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abiertomodal: false,
      open: false,
      titulo: "",
      cuerpo: "",
      imagenes: [],
      index: 0,
      link: "",
      github: "",
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex });
  };

  abrirmodal = () => {
    this.setState({ abiertomodal: !this.state.abiertomodal });
  };

  openmodalarticule = (id) => {
    console.log(id);
    this.setState({ abiertomodal: !this.state.abiertomodal });
    this.props.articles.map((article) => {
      if (article.id === id) {
        console.log(article);
        this.setState({ titulo: article.title });
        this.setState({ cuerpo: article.description });
        this.setState({ imagenes: article.image });
        this.setState({ link: article.link });
        this.setState({ github: article.github });
        console.log(this.state.imagenes);
        /*
            return(
            < ModalBasico                     
                titulo={article.title} 
                cuerpo={article.date} 
                open={true}
 
                />
            )*/
      }
    });

    //console.log(this.props.articles.get(id))
  };

  render() {
    const modalStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };

    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };

    return (
      <>
        <div className="article-list">
          {this.props.articles.map((article) => (
            <>
              <div className="article-container" key={article.id}>
                <div className="img-container">
                  <img
                    src={article.image[0]}
                    alt={article.title}
                    onClick={() => this.openmodalarticule(article.id)}
                  />
                </div>
                <div className="article-body">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <div className="article-footer">
                    <span>{article.date} · </span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <Modal
          show={this.state.abiertomodal}
          onHide={this.abrirmodal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>{this.state.titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel
              variant="dark"
              nextIcon={
                <IoIosArrowForward color="black" size={50}></IoIosArrowForward>
              }
              nextLabel={""}
              prevLabel={""}
              prevIcon={
                <IoIosArrowBack color="black" size={50}></IoIosArrowBack>
              }
              activeIndex={this.state.index}
              onSelect={this.handleSelect}
            >
              {this.state.imagenes.map((imagen) => {
                return (
                  <Carousel.Item>
                    <Image className="d-block w-100 " src={imagen} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button variant="primary" onClick={this.abrirmodal}>
                Cerrar
              </Button>
              <div>
                <a href={this.state.link}>
                  <AiOutlineLink size={30}></AiOutlineLink>
                </a>

                <a href={this.state.github}>
                  <AiFillGithub size={30}></AiFillGithub>
                </a>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
