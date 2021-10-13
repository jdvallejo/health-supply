import * as React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StaticImage } from "gatsby-plugin-image";
import Menu from "../components/Menu"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css"

const IndexPage = () => {
  return (
    <main>
      <Menu />
      <Container className="colors">
        <Row>
          <Col md={12} >
            <StaticImage
              alt="vw camiones"
              src="../images/health-supply-banner.png"
              className=""
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </Col>

        </Row>
        <Row>
          <Col md={12}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium quaerat molestias consectetur alias in ratione obcaecati commodi itaque, a ipsa quo suscipit, perferendis illum, esse et totam voluptatem maiores?
              Nihil provident laborum at omnis quae dolores perspiciatis obcaecati nulla id modi odit sapiente excepturi, magni odio voluptatibus! Aperiam harum veritatis, impedit inventore nulla quibusdam aliquid corporis ipsam at? Sapiente.
              Dolorem fugiat temporibus ex sed magni nihil fugit. Totam, eius adipisci cumque perspiciatis non explicabo quasi mollitia laboriosam quisquam, culpa, enim repellat cupiditate labore incidunt. Ab corporis maxime nesciunt similique?
              Quisquam blanditiis nemo repudiandae quaerat, odio totam similique molestiae eaque consectetur deserunt ut, temporibus ducimus magni nesciunt nostrum! Officiis suscipit, alias magnam dolore nulla commodi rem voluptatibus soluta quod voluptatum?
              Esse, corrupti a hic ab repellendus nemo aut, sequi odit facilis porro perferendis et itaque veniam ipsum. Ipsa alias blanditiis mollitia architecto expedita modi eligendi neque magni? Maxime, ducimus explicabo?
              Dolor, earum doloribus provident sapiente temporibus perspiciatis quos ullam dignissimos dicta est deleniti consectetur, fugiat odio accusantium praesentium sit ratione ex itaque odit! Aliquam repellendus facere magnam fuga voluptates non!
              Facilis earum recusandae ullam culpa libero mollitia a sunt in tenetur rem cum nobis, porro error quae possimus modi corporis, odit quisquam, hic atque temporibus corrupti minus. Repellat, quam architecto!
              Cum ea autem enim, nemo reiciendis sint dolorem quidem eos quis dolor incidunt quisquam magni dolores omnis ratione quibusdam molestias non deleniti corporis iste explicabo impedit! In, debitis nisi? Deleniti?
              Dignissimos aspernatur quae sequi soluta magni inventore sunt, eveniet beatae iste quisquam libero perferendis nihil placeat! Provident harum quaerat eaque molestias! Tenetur facere commodi repellendus quis rem minima provident aspernatur.
              Molestiae voluptate ab architecto animi, aperiam cum, facilis neque dicta, distinctio doloribus iusto repellat sunt! Eos delectus ut numquam, voluptatum praesentium, cumque atque similique fuga recusandae aperiam porro eveniet corporis!
              Officia, blanditiis quidem adipisci, dolor quod assumenda neque veniam accusamus provident dolores totam nobis molestias laudantium? Temporibus aut magni explicabo repellendus id facere libero, accusantium dolore totam provident atque quisquam.
              Eaque cumque aliquam modi ad? Impedit dignissimos distinctio dolorem culpa tenetur aliquid voluptatem dolore quas laudantium rerum vel nostrum, voluptates eligendi libero! Perspiciatis itaque quasi accusamus a ab illo ipsum!
              Praesentium, sequi quo, adipisci fuga perspiciatis assumenda eveniet excepturi, pariatur iusto quia quidem quas ratione rem. Saepe quos fugit quidem suscipit excepturi, voluptate a. Odit molestiae cupiditate itaque mollitia quo.
              Accusamus ratione libero dicta nisi, et dignissimos saepe facere! At distinctio vitae enim commodi, sit nostrum unde non assumenda mollitia earum sed exercitationem facilis aperiam dolorum cumque tempore ducimus optio.
              Dolorum deleniti, asperiores possimus eveniet laboriosam voluptatem recusandae autem quia vitae, velit nobis libero ad voluptates itaque eos quas? Quae recusandae mollitia optio vero magni harum reiciendis velit libero eum.
              Magnam, impedit deserunt ipsum asperiores reiciendis adipisci quam quasi voluptatum incidunt, minus perspiciatis dicta quas voluptate. Explicabo, iste voluptatem dolore commodi aut ab omnis cupiditate nisi rerum magnam totam recusandae.
              Numquam deleniti nostrum aliquam ad necessitatibus, inventore ducimus, sed enim, adipisci vel maiores iste eius dolor veritatis! Fugiat nam sint ipsum dignissimos, exercitationem accusantium, ut nesciunt placeat iure excepturi dolorum?
              Quasi cum dolor aspernatur. Consequatur corporis placeat incidunt numquam doloremque natus ipsam ipsa maxime iure, ipsum quasi aliquid magni inventore! Necessitatibus odit ipsam quos? Corporis distinctio illum magni consectetur ipsum.
              Provident tempore numquam animi sunt quaerat sapiente veniam dolorum, placeat cupiditate quibusdam ullam iste quia fugit, pariatur natus velit! Tempore aut voluptas dolor perspiciatis nobis numquam repellendus temporibus, commodi id?
              Ipsum a blanditiis repellendus molestias, consequatur, debitis error dolorem accusamus, itaque animi quasi fugit aliquid iure voluptatem tenetur at magni dolor eius voluptates. Pariatur alias rerum est dolores sunt odit!</p>
          </Col>
        </Row>
      </Container>

    </main>
  )
}

export default IndexPage
