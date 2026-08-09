import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Image, Badge } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { FaSearchPlus } from "react-icons/fa";
import "../../scss/bootstrap/scss/bootstrap.scss";

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abiertomodal: false,
      titulo: "",
      cuerpo: "",
      imagenes: [],
      index: 0,
      link: "",
      github: "",
      categoria: "",
      fecha: "",
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex });
  };

  abrirmodal = () => {
    this.setState({ abiertomodal: !this.state.abiertomodal });
  };

  openmodalarticule = (id) => {
    const article = this.props.articles.find((art) => art.id === id);
    if (article) {
      this.setState({
        abiertomodal: true,
        titulo: article.title,
        cuerpo: article.description,
        imagenes: article.image || [],
        link: article.link || "",
        github: article.github || "",
        categoria: article.category || "",
        fecha: article.date || "",
        index: 0,
      });
    }
  };

  render() {
    return (
      <>
        <div className="article-list">
          {this.props.articles.map((article) => (
            <div className="article-container" key={article.id}>
              <div className="img-container">
                <img
                  src={article.image[0]}
                  alt={article.title}
                  onClick={() => this.openmodalarticule(article.id)}
                />
              </div>
              <div className="article-body">
                <h2 onClick={() => this.openmodalarticule(article.id)} style={{ cursor: 'pointer' }}>
                  {article.title}
                </h2>
                <p>{article.description}</p>
                <div className="article-footer">
                  <span>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal
          show={this.state.abiertomodal}
          onHide={this.abrirmodal}
          centered
          size="xl"
          className="portfolio-project-modal"
        >
          <Modal.Header closeButton className="px-4 py-3 align-items-center">
            <div>
              <Modal.Title className="h5 font-weight-bold mb-1">
                {this.state.titulo}
              </Modal.Title>
              {this.state.categoria && (
                <Badge bg="primary" className="px-3 py-1 font-weight-normal text-white bg-primary">
                  {this.state.categoria}
                </Badge>
              )}
            </div>
          </Modal.Header>
          <Modal.Body className="p-4">
            {this.state.imagenes && this.state.imagenes.length > 0 && (
              <div className="portfolio-carousel-wrapper mb-4">
                <Carousel
                  variant="dark"
                  nextIcon={
                    <div className="carousel-control-btn next">
                      <IoIosArrowForward size={24} />
                    </div>
                  }
                  prevIcon={
                    <div className="carousel-control-btn prev">
                      <IoIosArrowBack size={24} />
                    </div>
                  }
                  nextLabel=""
                  prevLabel=""
                  activeIndex={this.state.index}
                  onSelect={this.handleSelect}
                  interval={null}
                >
                  {this.state.imagenes.map((imagen, idx) => (
                    <Carousel.Item key={idx}>
                      <div className="carousel-img-container position-relative">
                        <a
                          href={imagen}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Hacer clic para abrir imagen completa en HD"
                          className="d-block w-100 text-center"
                        >
                          <Image
                            className="d-block modal-project-img"
                            src={imagen}
                            alt={`${this.state.titulo} - ${idx + 1}`}
                          />
                        </a>
                        <a
                          href={imagen}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-hd-zoom"
                          title="Abrir imagen en HD"
                        >
                          <FaSearchPlus size={14} className="mr-1" /> Ver HD
                        </a>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            )}

            <div className="project-detail-content">
              <h6 className="font-weight-bold text-uppercase text-muted mb-2 style-subtitle" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                Descripción del Proyecto
              </h6>
              <p className="project-description-text mb-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {this.state.cuerpo}
              </p>
              {this.state.fecha && (
                <p className="text-muted small mb-0">
                  <i className="far fa-calendar-alt mr-2"></i>{this.state.fecha}
                </p>
              )}
            </div>
          </Modal.Body>

          <Modal.Footer className="px-4 py-3 d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex align-items-center gap-2 my-1 flex-wrap">
              {this.state.link && this.state.link.trim() !== "" && (
                <a
                  href={this.state.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm px-3 mr-2 d-inline-flex align-items-center"
                >
                  <AiOutlineLink size={18} className="mr-1" />
                  Ver Demo / Sitio
                </a>
              )}
              {this.state.github && this.state.github.trim() !== "" && (
                <a
                  href={this.state.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm px-3 mr-2 d-inline-flex align-items-center btn-github-modal"
                >
                  <AiFillGithub size={18} className="mr-1" />
                  Ver Código (GitHub)
                </a>
              )}
            </div>
            <Button variant="secondary" onClick={this.abrirmodal} className="btn-sm px-4">
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

