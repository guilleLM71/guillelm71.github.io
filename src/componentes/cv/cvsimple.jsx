import React from "react";

const CVComponent = () => {
  return (
    <div className="container max-w-4xl p-10 m-10 bg-white shadow-lg rounded-2xl text-gray-800 font-sans">
      {/* Header */}
      <div className="border-b pb-6 mb-6">
        <h1 className="text-3xl font-bold">Juan Guillermo Laura Mamani</h1>
        <p className="text-lg text-gray-600">Desarrollado Webr</p>
        <div className="mt-2 text-sm text-gray-500">
          <p>Email: jguillermolaura@gmail.com | Tel: (591) 78889375</p>
          <p>LinkedIn: https://www.linkedin.com/in/juan-guillermo-laura-mamani</p>
          <p>GitHub: https://github.com/guilleLM71</p>
      
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Resumen profesional
        </h2>
        <p className="text-sm leading-relaxed">
          Profesional de informática de la Universidad Mayor de San Andres, con
          experiencia como Desarrollador de Software. Desarrollador web enfocado
          en Frontend y Backend con MongoDb, SQL, Node y React, Next,
          ReactNative, Java, SpringBoot, Angular, adicionalmente tecnología
          blockchain con Solidity, y con conocimientos en ML en con Python, con
          experiencia en control de calidad de software
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Experiencia laboral
        </h2>

        {/* MEFP - Consultor */}
        <div className="mb-4">
          <h3 className="text-md font-semibold">
            Control de Calidad (Consultor) – Ministerio de Economía y Finanzas
            Públicas (MEFP)
          </h3>
          <p className="text-sm text-gray-500">
            La Paz, Bolivia | Junio 2024 - Actual
          </p>
          <ul className="list-disc ml-5 text-sm mt-1 text-gray-700">
            <li>Desarrollo de microservicios.</li>
            <li>Mantenimiento de servicios web y herramientas internas.</li>
            <li>Automatización de pruebas con Selenium.</li>
            <li>
              Revisión de documentación relacionada al control de calidad.
            </li>
            <li>
              Pruebas funcionales y revisión de código como parte del proceso de
              QA.
            </li>
          </ul>
        </div>

        {/* MEFP - Pasante */}
        <div className="mb-4">
          <h3 className="text-md font-semibold">
            Control de Calidad (Pasante) – Ministerio de Economía y Finanzas
            Públicas (MEFP)
          </h3>
          <p className="text-sm text-gray-500">
            La Paz, Bolivia | julio 2023 - diciembre 2023
          </p>
          <ul className="list-disc ml-5 text-sm mt-1 text-gray-700">
            <li>
              Apoyo en el desarrollo de microservicios conforme a estándares de
              calidad institucional.
            </li>
            <li>
              Automatización de pruebas utilizando Selenium e integración con
              herramientas de la entidad.
            </li>
            <li>
              Participación en pruebas funcionales y revisión de código dentro
              del equipo de QA.
            </li>
          </ul>
        </div>

        {/* FAADU - Becario */}
        <div className="mb-4">
          <h3 className="text-md font-semibold">
            Apoyo Técnico (Becario) – Facultad de Arquitectura (FAADU)
          </h3>
          <p className="text-sm text-gray-500">
            La Paz, Bolivia | febrero 2021 - junio 2021
          </p>
          <ul className="list-disc ml-5 text-sm mt-1 text-gray-700">
            <li>
              Uso de MS-Office y otras herramientas para creación de documentos
              técnicos.
            </li>
            <li>Resolución de problemas de hardware y software.</li>
            <li>Asistencia técnica presencial y remota a usuarios.</li>
            <li>Monitoreo del funcionamiento de sistemas y componentes.</li>
            <li>Instalación y configuración de programas y componentes.</li>
            <li>Soporte operativo y mantenimiento preventivo de TIC.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Education</h2>
        <div>
          <p className="text-sm font-semibold">
            Licenciatura en Informática - Mención Ciencias de la computación
          </p>
          <p className="text-sm text-gray-500">
            Universidad Mayor de San Andrés| 2017 – 2023
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Habilidades
        </h2>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li>
            <strong>Idiomas:</strong> Español (Nativo), Aimara (Básico), Inglés
            (Básico)
          </li>
          <li>
            <strong>Backend y Frontend:</strong> Java, Spring Boot, JavaScript,
            CSS (Tailwind, Bootstrap), HTML, React, Node.js, Express
          </li>
          <li>
            <strong>Bases de datos:</strong> SQL (MySQL, PostgreSQL, Oracle),
            MongoDB, Firebase
          </li>
          <li>
            <strong>Otros lenguajes y herramientas:</strong> Python, Solidity
            (Desarrollo Blockchain), C#, Selenium (Automatización), Git, GitHub,
            GitLab, Docker
          </li>
          <li>
            <strong>Ofimática y diseño:</strong> MS Office, G-Suite, WordPress,
            Wix, Adobe Creative Suite (Photoshop, Illustrator, Premiere, After
            Effects, XD), Figma
          </li>
          <li>
            <strong>Pruebas y QA:</strong> JMeter, Katalon, K2
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Educación y Formación
        </h2>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li>
            <strong>Centro Educativo Técnico “Cristo de la Concordia”</strong> —
            Páginas Web, Operador, Mantenimiento de Computadora, Técnico de
            Aplicaciones
          </li>
          <li>
            <strong>Universidad Mayor de San Andrés</strong> — Unity: Desarrollo
            de Videojuegos, SQL Server
          </li>
          <li>
            <strong>Oracle - Alura | Oracle Next Education (ONE)</strong>
            <ul className="list-disc ml-5">
              <li>Desarrollo Backend</li>
              <li>Desarrollo Frontend</li>
              <li>AlumniONE</li>
              <li>Formación en Desarrollo Personal G4</li>
              <li>Formación Principiante en Programación G4</li>
              <li>Formación Java Orientado a Objetos G4</li>
              <li>Formación Business Agility G4</li>
              <li>Formación Integre Aplicaciones Java con Base de Datos</li>
              <li>Formación Java Web</li>
              <li>Formación Java y Spring Boot G4</li>
              <li>Formación Emprendimiento G4</li>
              <li>Formación SQL con MySQL</li>
              <li>Formación SQL con SQL Server de Oracle</li>
              <li>Formación Oracle Cloud Infrastructure</li>
            </ul>
          </li>
          <li>
            <strong>LiteThinking</strong> — QA: Automatizaciones de Pruebas
          </li>
          <li>
            <strong>EGPP</strong> — Idioma Aimara Básico
          </li>
          <li>
            <strong>Infocal</strong> — Edición de Video y Sonido
          </li>
          <li>
            <strong>Udemy</strong> — Adobe Photoshop CC 2021
          </li>
          <li>
            <strong>Crehana</strong> — Adobe Photoshop CC
          </li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Certificaciones y Reconocimientos
        </h2>
        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
          <li>HTML y CSS</li>
          <li>Bootstrap y jQuery</li>
          <li>PHP y MySQL</li>
          <li>Excel Aplicado a Finanzas</li>
          <li>Scrum Foundation Professional Certificate</li>
          <li>Microsoft Student Partners: Empowering and Connecting</li>
          <li>
            Congreso Internacional Virtual: Ciberseguridad en Tiempos de COVID
          </li>
          <li>Ciencia de Datos</li>
          <li>Cloud Computing y su Implantación en Bolivia</li>
          <li>Conociendo la Cadena de Bloques</li>
          <li>Deep Learning con TensorFlow y ML .NET</li>
          <li>Swift</li>
          <li>Flutter Multiplataforma</li>
          <li>Hardware y Flutter</li>
          <li>State Hoisting con Jetpack Compose</li>
          <li>Flutter: Métricas y Gráficos en Tiempo Real</li>
          <li>Job Oriented Learner</li>
          <li>Protección de Datos</li>
          <li>Análisis de Datos en Imágenes FMRI</li>
          <li>3er Congreso Internacional de Seguridad Informática</li>
          <li>Curso Profesional de Java</li>
          <li>Curso de Fundamentos de Angular</li>
          <li>Curso Profesional de DevOps</li>
          <li>Curso de React.js con Vite y Tailwind</li>
          <li>Visualización de Datos con Power BI</li>
          <li>Curso de Django</li>
          <li>Curso de Python</li>
          <li>Curso de Backend con Node.js</li>
          <li>Curso de React</li>
        </ul>
      </section>
    </div>
  );
};

export default CVComponent;
