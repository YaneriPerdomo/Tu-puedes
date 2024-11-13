-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-09-2024 a las 15:04:51
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tu_puedes`
--
CREATE DATABASE IF NOT EXISTS `tu_puedes` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tu_puedes`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `afiliaciones`
--

CREATE TABLE `afiliaciones` (
  `id_afiliacion` int(10) NOT NULL,
  `afiliacion` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `afiliaciones`
--

INSERT INTO `afiliaciones` (`id_afiliacion`, `afiliacion`) VALUES
(1, 'Madre'),
(2, 'Padre'),
(3, 'Abuelo'),
(4, 'Abuela'),
(5, 'Bisabuelo'),
(6, 'Bisabuela'),
(7, 'Tío'),
(8, 'Tía'),
(9, 'Sobrino'),
(10, 'Sobrina'),
(11, 'Primo'),
(12, 'Primo'),
(13, 'Vecino'),
(14, 'Vecina'),
(15, 'Suegro'),
(16, 'Suegra'),
(17, 'Cuñado'),
(18, 'Cuñada'),
(19, 'Yerno'),
(20, 'Nuera'),
(21, 'Pareja'),
(22, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargos`
--

CREATE TABLE `cargos` (
  `id_cargo` int(10) NOT NULL,
  `cargo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cargos`
--

INSERT INTO `cargos` (`id_cargo`, `cargo`) VALUES
(1, 'Docente'),
(2, 'Terapeuta ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles_jugadores`
--

CREATE TABLE `detalles_jugadores` (
  `id_detalles_jugador` int(10) NOT NULL,
  `id_usuario` int(10) NOT NULL,
  `fecha_validez` date DEFAULT NULL,
  `estrellas_totales` tinyint(3) DEFAULT NULL,
  `porcentaje` tinyint(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etapas`
--

CREATE TABLE `etapas` (
  `id_etapa` int(10) NOT NULL,
  `etapa` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id_genero` int(10) NOT NULL,
  `genero` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id_genero`, `genero`) VALUES
(1, 'Masculino '),
(2, 'Femenino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lecciones`
--

CREATE TABLE `lecciones` (
  `id_leccion` int(10) NOT NULL,
  `id_seccion` int(10) DEFAULT NULL,
  `leccion` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lecciones_completadas`
--

CREATE TABLE `lecciones_completadas` (
  `id_leccion_completada` int(10) NOT NULL,
  `id_leccion` int(10) NOT NULL,
  `id_usuario` int(10) NOT NULL,
  `completada` bit(1) DEFAULT b'0',
  `estrellas` tinyint(3) DEFAULT NULL,
  `porcentaje` tinyint(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ninos`
--

CREATE TABLE `ninos` (
  `id_nino` int(10) NOT NULL,
  `id_genero` int(10) NOT NULL,
  `id_usuario` int(10) NOT NULL,
  `id_pais` int(10) NOT NULL,
  `id_profesional` int(10) DEFAULT NULL,
  `id_representante` int(10) DEFAULT NULL,
  `fecha_nacimiento` date NOT NULL,
  `sabe_leer` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ninos`
--

INSERT INTO `ninos` (`id_nino`, `id_genero`, `id_usuario`, `id_pais`, `id_profesional`, `id_representante`, `fecha_nacimiento`, `sabe_leer`) VALUES
(1, 1, 12, 11, NULL, NULL, '2021-02-02', b'1'),
(3, 1, 15, 17, NULL, 1, '2003-11-05', b'0'),
(6, 1, 19, 5, 1, NULL, '2023-02-23', b'0'),
(7, 1, 20, 6, NULL, 2, '0000-00-00', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id_pais` int(10) NOT NULL,
  `pais` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id_pais`, `pais`) VALUES
(1, 'México '),
(2, 'Belice'),
(3, 'Costa Rica'),
(4, 'El Salvador'),
(5, 'Guatemala'),
(6, 'Honduras'),
(7, 'Nicaragua'),
(8, 'Panamá'),
(9, 'Antigua y Barbuda'),
(10, 'Bahamas'),
(11, 'Barbados'),
(12, 'Cuba'),
(13, 'Dominica'),
(14, 'Granada'),
(15, 'Haití'),
(16, 'Jamaica'),
(17, 'Puerto Rico'),
(18, 'República Dominicana'),
(19, 'San Cristóbal y Nevis'),
(20, 'Santa Lucía'),
(21, 'San Vicente y las Granadinas'),
(22, 'Trinidad y Tobago'),
(23, 'Argentina'),
(24, 'Bolivia'),
(25, 'Brasil'),
(26, 'Chile'),
(27, 'Colombia'),
(28, 'Ecuador'),
(29, 'Guyana'),
(30, 'Paraguay'),
(31, 'Perú'),
(32, 'Surinam'),
(33, 'Uruguay'),
(34, 'Venezuela');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesionales`
--

CREATE TABLE `profesionales` (
  `id_profesional` int(10) NOT NULL,
  `id_usuario` int(10) NOT NULL,
  `id_cargo` int(10) NOT NULL,
  `id_pais` int(10) DEFAULT NULL,
  `nombre` varchar(55) NOT NULL,
  `apellido` varchar(55) NOT NULL,
  `correo_electronico` varchar(80) NOT NULL,
  `centro_educativo_profesional` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesionales`
--

INSERT INTO `profesionales` (`id_profesional`, `id_usuario`, `id_cargo`, `id_pais`, `nombre`, `apellido`, `correo_electronico`, `centro_educativo_profesional`) VALUES
(1, 3, 1, NULL, 'yaneri', 'perdomo', 'perdomopaolabarrios@gmail.com', '1'),
(3, 7, 1, NULL, 'yaneri', 'perdomo', 'perdomopaolabarrio@gmail.com', '1'),
(5, 9, 1, NULL, 'yaneri', 'perdomo', 'barrios@gmail.com', '1'),
(6, 10, 1, NULL, 'Yaneri', 'Perdomo', 'Admin@gmail.com', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `representantes`
--

CREATE TABLE `representantes` (
  `id_representante` int(10) NOT NULL,
  `id_usuario` int(10) DEFAULT NULL,
  `id_afiliacion` int(10) DEFAULT NULL,
  `id_pais` int(10) DEFAULT NULL,
  `nombre` varchar(55) DEFAULT NULL,
  `apellido` varchar(55) DEFAULT NULL,
  `correo_electronico` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `representantes`
--

INSERT INTO `representantes` (`id_representante`, `id_usuario`, `id_afiliacion`, `id_pais`, `nombre`, `apellido`, `correo_electronico`) VALUES
(1, 13, 1, 17, 'Dustin', 'Perdomo', 'dustinperdomo@gmail.com'),
(2, 16, 2, 17, 'Fanny', 'barrios', 'fannyperdomo@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_rol` int(10) NOT NULL,
  `rol` varchar(18) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_rol`, `rol`) VALUES
(1, 'Profesional'),
(2, 'Representante'),
(3, 'Estudiante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--

CREATE TABLE `secciones` (
  `id_seccion` int(10) NOT NULL,
  `id_etapa` int(10) NOT NULL,
  `seccion` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiempo_jugadores`
--

CREATE TABLE `tiempo_jugadores` (
  `id_tiempo_jugador` int(10) NOT NULL,
  `id_usuario` int(10) DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `tiempo` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ultimas_fechas_sesion`
--

CREATE TABLE `ultimas_fechas_sesion` (
  `id_ultima_fecha_sesion` int(10) NOT NULL,
  `fecha_ultima_sesion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(10) NOT NULL,
  `id_rol` int(10) NOT NULL,
  `usuario` varchar(15) DEFAULT NULL,
  `clave` varchar(8) DEFAULT NULL,
  `estado` bit(1) DEFAULT b'0',
  `permisos` bit(1) DEFAULT b'0',
  `fecha_creacion` datetime DEFAULT NULL,
  `fecha_validez` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `id_rol`, `usuario`, `clave`, `estado`, `permisos`, `fecha_creacion`, `fecha_validez`) VALUES
(3, 1, 'yaneri', '1234', b'1', b'1', '2024-06-21 00:00:00', NULL),
(7, 1, 'yane3perdomo', '123', b'1', b'1', '2024-06-21 00:00:00', NULL),
(8, 1, 'perdomo', '123', b'1', b'1', '2024-06-21 00:00:00', NULL),
(9, 1, 'perdomoyane', '123', b'1', b'1', '2024-06-21 00:00:00', NULL),
(10, 1, 'yaneriperdomo72', '123', b'1', b'1', '2024-06-22 00:00:00', NULL),
(12, 3, 'Yane3perdomo0', '', b'1', b'1', '2024-08-02 00:00:00', '2024-08-27 00:00:00'),
(13, 2, 'DustinJames', '12345', b'1', b'0', '2024-08-02 00:00:00', NULL),
(15, 3, 'yayihermosa', '123', b'1', b'1', '2024-08-02 00:00:00', '2024-08-26 00:00:00'),
(16, 2, 'Fanny3', '1234', b'1', b'0', '2024-08-14 00:00:00', NULL),
(18, 3, '', '', b'1', b'0', '2024-09-04 00:00:00', '0000-00-00 00:00:00'),
(19, 3, '2232', '123', b'1', b'0', '2024-09-04 00:00:00', '2030-02-22 00:00:00'),
(20, 3, 'Dustin12', '123', b'1', b'1', '2024-09-04 00:00:00', '2030-12-12 00:00:00'),
(22, 3, '343', '123', b'1', b'0', '2024-09-04 00:00:00', '0000-00-00 00:00:00'),
(23, 3, '434324353', '123', b'1', b'1', '2024-09-04 00:00:00', '2030-02-02 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `afiliaciones`
--
ALTER TABLE `afiliaciones`
  ADD PRIMARY KEY (`id_afiliacion`);

--
-- Indices de la tabla `cargos`
--
ALTER TABLE `cargos`
  ADD PRIMARY KEY (`id_cargo`);

--
-- Indices de la tabla `detalles_jugadores`
--
ALTER TABLE `detalles_jugadores`
  ADD PRIMARY KEY (`id_detalles_jugador`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `etapas`
--
ALTER TABLE `etapas`
  ADD PRIMARY KEY (`id_etapa`);

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id_genero`);

--
-- Indices de la tabla `lecciones`
--
ALTER TABLE `lecciones`
  ADD PRIMARY KEY (`id_leccion`),
  ADD KEY `id_seccion` (`id_seccion`);

--
-- Indices de la tabla `lecciones_completadas`
--
ALTER TABLE `lecciones_completadas`
  ADD PRIMARY KEY (`id_leccion_completada`),
  ADD KEY `id_leccion` (`id_leccion`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `ninos`
--
ALTER TABLE `ninos`
  ADD PRIMARY KEY (`id_nino`),
  ADD KEY `id_pais` (`id_pais`),
  ADD KEY `id_genero` (`id_genero`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `ninos_ibfk_4` (`id_profesional`),
  ADD KEY `ninos_ibfk_5` (`id_representante`);

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id_pais`);

--
-- Indices de la tabla `profesionales`
--
ALTER TABLE `profesionales`
  ADD PRIMARY KEY (`id_profesional`),
  ADD UNIQUE KEY `correo_electronico` (`correo_electronico`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_cargo` (`id_cargo`),
  ADD KEY `id_pais` (`id_pais`);

--
-- Indices de la tabla `representantes`
--
ALTER TABLE `representantes`
  ADD PRIMARY KEY (`id_representante`),
  ADD UNIQUE KEY `correo_electronico` (`correo_electronico`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_afiliacion` (`id_afiliacion`),
  ADD KEY `id_pais` (`id_pais`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD PRIMARY KEY (`id_seccion`),
  ADD KEY `id_etapa` (`id_etapa`);

--
-- Indices de la tabla `tiempo_jugadores`
--
ALTER TABLE `tiempo_jugadores`
  ADD PRIMARY KEY (`id_tiempo_jugador`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `ultimas_fechas_sesion`
--
ALTER TABLE `ultimas_fechas_sesion`
  ADD PRIMARY KEY (`id_ultima_fecha_sesion`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `afiliaciones`
--
ALTER TABLE `afiliaciones`
  MODIFY `id_afiliacion` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `cargos`
--
ALTER TABLE `cargos`
  MODIFY `id_cargo` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `detalles_jugadores`
--
ALTER TABLE `detalles_jugadores`
  MODIFY `id_detalles_jugador` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `etapas`
--
ALTER TABLE `etapas`
  MODIFY `id_etapa` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id_genero` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `lecciones`
--
ALTER TABLE `lecciones`
  MODIFY `id_leccion` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lecciones_completadas`
--
ALTER TABLE `lecciones_completadas`
  MODIFY `id_leccion_completada` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ninos`
--
ALTER TABLE `ninos`
  MODIFY `id_nino` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `paises`
--
ALTER TABLE `paises`
  MODIFY `id_pais` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `profesionales`
--
ALTER TABLE `profesionales`
  MODIFY `id_profesional` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `representantes`
--
ALTER TABLE `representantes`
  MODIFY `id_representante` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id_rol` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `secciones`
--
ALTER TABLE `secciones`
  MODIFY `id_seccion` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tiempo_jugadores`
--
ALTER TABLE `tiempo_jugadores`
  MODIFY `id_tiempo_jugador` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ultimas_fechas_sesion`
--
ALTER TABLE `ultimas_fechas_sesion`
  MODIFY `id_ultima_fecha_sesion` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalles_jugadores`
--
ALTER TABLE `detalles_jugadores`
  ADD CONSTRAINT `detalles_jugadores_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `lecciones`
--
ALTER TABLE `lecciones`
  ADD CONSTRAINT `lecciones_ibfk_1` FOREIGN KEY (`id_seccion`) REFERENCES `secciones` (`id_seccion`);

--
-- Filtros para la tabla `lecciones_completadas`
--
ALTER TABLE `lecciones_completadas`
  ADD CONSTRAINT `lecciones_completadas_ibfk_1` FOREIGN KEY (`id_leccion`) REFERENCES `lecciones` (`id_leccion`),
  ADD CONSTRAINT `lecciones_completadas_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `ninos`
--
ALTER TABLE `ninos`
  ADD CONSTRAINT `ninos_ibfk_1` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`),
  ADD CONSTRAINT `ninos_ibfk_2` FOREIGN KEY (`id_genero`) REFERENCES `generos` (`id_genero`),
  ADD CONSTRAINT `ninos_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `ninos_ibfk_4` FOREIGN KEY (`id_profesional`) REFERENCES `profesionales` (`id_profesional`),
  ADD CONSTRAINT `ninos_ibfk_5` FOREIGN KEY (`id_representante`) REFERENCES `representantes` (`id_representante`);

--
-- Filtros para la tabla `profesionales`
--
ALTER TABLE `profesionales`
  ADD CONSTRAINT `profesionales_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `profesionales_ibfk_2` FOREIGN KEY (`id_cargo`) REFERENCES `cargos` (`id_cargo`),
  ADD CONSTRAINT `profesionales_ibfk_3` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`);

--
-- Filtros para la tabla `representantes`
--
ALTER TABLE `representantes`
  ADD CONSTRAINT `representantes_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `representantes_ibfk_2` FOREIGN KEY (`id_afiliacion`) REFERENCES `afiliaciones` (`id_afiliacion`),
  ADD CONSTRAINT `representantes_ibfk_3` FOREIGN KEY (`id_pais`) REFERENCES `paises` (`id_pais`);

--
-- Filtros para la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD CONSTRAINT `secciones_ibfk_1` FOREIGN KEY (`id_etapa`) REFERENCES `etapas` (`id_etapa`);

--
-- Filtros para la tabla `tiempo_jugadores`
--
ALTER TABLE `tiempo_jugadores`
  ADD CONSTRAINT `tiempo_jugadores_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
