/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import mobile from '../../assets/recentprojects/mobile.png';
import web from '../../assets/recentprojects/web.png';
import kopi from '../../assets/recentprojects/kopi.png';
import fifo from '../../assets/recentprojects/fifo.png';
import inggris from '../../assets/recentprojects/inggris.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects] = useState([
    { 
      id: 1,
      title: 'Design App Mobile Edunote', 
      description: `Merancang dan mengembangkan aplikasi mobile Edunote yang berfokus pada kemudahan penggunaan bagi pelajar, 
      dengan antarmuka intuitif dan fitur-fitur
      edukatif yang mendukung kegiatan belajar mengajar.`,
      alter: 'React Portfolio',
      image: mobile,
    },
    { 
      id: 2,
      title: 'Website Agsa Design', 
      description: `Membangun website untuk Agsa Design dengan menggunakan teknologi MEAN stack, menampilkan portofolio desain yang kreatif dan modern serta memudahkan klien dalam melihat dan memesan jasa desain`,
      alter: 'VeriTru Project',
      image: web,
    },
    { 
      id: 3,
      title: 'Design Landing Page Coffee Shop', 
      description: `Mendesain landing page untuk sebuah kedai kopi yang modern dan menarik, dengan tata letak yang responsif dan visual yang menonjolkan produk unggulan kedai.`,
      alter: 'LoFo Project',
      image: kopi,
    },
    { 
      id: 4,
      title: 'Design Landing Page Bank Fifo', 
      description: `Membangun landing page untuk Bank Fifo dengan menggunakan teknologi MEVN stack, menampilkan fitur-fitur perbankan dan informasi produk dengan antarmuka yang ramah pengguna.`,
      alter: 'Startup Project',
      image: fifo,
    },
    { 
      id: 5,
      title: 'Website Les Bahasa Inggris', 
      description: `Membangun website untuk lembaga les Bahasa Inggris dengan menggunakan Wordpress dan PHP, dilengkapi dengan alat SEO terintegrasi untuk meningkatkan prospek dan menghasilkan lebih banyak leads bagi bisnis.`,
      alter: 'LaCalle Cafe',
      image: inggris,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
