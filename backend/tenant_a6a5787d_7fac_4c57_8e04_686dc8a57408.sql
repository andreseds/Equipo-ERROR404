-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-03-2023 a las 06:21:28
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tenant_a6a5787d_7fac_4c57_8e04_686dc8a57408`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `private_chunks`
--

CREATE TABLE `private_chunks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `alias` varchar(512) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `private_clientapps`
--

CREATE TABLE `private_clientapps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `publickey` varchar(128) NOT NULL,
  `privatekey` varchar(128) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` mediumtext DEFAULT NULL,
  `host` varchar(128) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `expirationdate` timestamp NOT NULL DEFAULT current_timestamp(),
  `users_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `private_logs`
--

CREATE TABLE `private_logs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `title` varchar(128) DEFAULT NULL,
  `module` varchar(512) DEFAULT NULL,
  `users_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `private_parameters`
--

CREATE TABLE `private_parameters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `paramKey` varchar(128) DEFAULT NULL,
  `paramValue` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `private_parameters`
--

INSERT INTO `private_parameters` (`id`, `guid`, `str`, `createdOn`, `updatedOn`, `creator`, `owner`, `updatedby`, `chunk`, `rule`, `trash`, `paramKey`, `paramValue`) VALUES
(1, '', NULL, '2023-03-12 04:23:25', NULL, NULL, NULL, NULL, NULL, 'readonly', NULL, 'systemKey', '1b2308e9-4a13-478d-98b8-512eedd05a77'),
(2, '2e4a1ee9-d61e-4d7d-b81f-b194a9dfcff1', '', '2023-03-12 04:23:25', NULL, 11, 11, NULL, NULL, NULL, 0, 'allowMultiSession', 'false'),
(3, 'c1181238-aada-4a38-8de9-0939ce560771', '', '2023-03-12 04:23:25', NULL, 11, 11, NULL, NULL, NULL, 0, 'allowGroupSegmentation', 'true'),
(4, '5ce3c924-bcc8-4f9e-962d-65ad57c37399', '', '2023-03-12 04:23:25', NULL, 11, 11, NULL, NULL, NULL, 0, 'allowUserRegistration', 'true'),
(5, '646e9a3d-75e4-4171-8461-4a7ddc381530', '', '2023-03-12 04:23:25', NULL, 11, 11, NULL, NULL, NULL, 0, 'emailConfirmRegistration', 'true'),
(6, 'ac2c3a8c-773d-4c36-9087-bbe9b72d02dc', '', '2023-03-12 04:23:25', NULL, 11, 11, NULL, NULL, NULL, 0, 'maxLoginFailedCount', '3'),
(7, '246bebb3-1381-4225-b084-59e071a5c43f', '', '2023-03-12 04:23:25', NULL, 11, 11, NULL, NULL, NULL, 0, 'sessionDuration', '1200000'),
(8, '1b0b6c25-5d06-4d59-89fd-77770dce2823', '', '2023-03-12 04:23:25', NULL, 11, 11, NULL, NULL, NULL, 0, 'authorizationLevel', '10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `private_roles`
--

CREATE TABLE `private_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `meta` varchar(128) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `root` varchar(128) DEFAULT NULL,
  `isUserExtension` tinyint(1) DEFAULT NULL,
  `_create` int(11) DEFAULT NULL,
  `_update` int(11) DEFAULT NULL,
  `_delete` int(11) DEFAULT NULL,
  `_read` int(11) DEFAULT NULL,
  `_share` int(11) DEFAULT NULL,
  `_transfer` int(11) DEFAULT NULL,
  `_clientapp` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `private_roles`
--

INSERT INTO `private_roles` (`id`, `guid`, `str`, `createdOn`, `updatedOn`, `creator`, `owner`, `updatedby`, `chunk`, `rule`, `trash`, `meta`, `name`, `root`, `isUserExtension`, `_create`, `_update`, `_delete`, `_read`, `_share`, `_transfer`, `_clientapp`) VALUES
(1, 'e1d5bb25-e0c4-4cd0-a588-60704ef1de34', '', '2023-03-12 04:23:25', NULL, 11, 11, NULL, NULL, NULL, 0, 'customers', 'customers', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, '8eff9cba-6489-4401-972e-fd5dc1d627b4', '', '2023-03-12 04:23:25', NULL, 11, 11, NULL, NULL, NULL, 0, 'system', 'System', NULL, 1, 10, 10, 10, 10, 10, 10, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `private_translations`
--

CREATE TABLE `private_translations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `value` varchar(512) DEFAULT NULL,
  `objectGuid` varchar(512) DEFAULT NULL,
  `recordGuid` varchar(512) DEFAULT NULL,
  `propertyGuid` varchar(512) DEFAULT NULL,
  `locale` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `private_usersxchunks`
--

CREATE TABLE `private_usersxchunks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `chunks_id` bigint(20) UNSIGNED DEFAULT NULL,
  `users_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `private_usersxroles`
--

CREATE TABLE `private_usersxroles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `roles_id` bigint(20) UNSIGNED DEFAULT NULL,
  `users_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `private_usersxroles`
--

INSERT INTO `private_usersxroles` (`id`, `guid`, `str`, `createdOn`, `updatedOn`, `creator`, `owner`, `updatedby`, `chunk`, `rule`, `trash`, `roles_id`, `users_id`) VALUES
(1, 'c5ba9b9b-80d1-44b8-a9c2-8a184abc3a6d', '', '2023-03-12 04:23:25', NULL, 11, 11, NULL, NULL, NULL, 0, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_customers`
--

CREATE TABLE `public_customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `firstname` varchar(512) DEFAULT NULL,
  `lastname` varchar(512) DEFAULT NULL,
  `phone1` varchar(512) DEFAULT NULL,
  `phone2` varchar(512) DEFAULT NULL,
  `address` varchar(512) DEFAULT NULL,
  `birthdate` timestamp NULL DEFAULT NULL,
  `meta` varchar(512) DEFAULT NULL,
  `status` varchar(512) DEFAULT NULL,
  `users_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_customers_x_tags`
--

CREATE TABLE `public_customers_x_tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `tags_id` bigint(20) UNSIGNED DEFAULT NULL,
  `customers_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_status`
--

CREATE TABLE `public_status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `title` varchar(512) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_tags`
--

CREATE TABLE `public_tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `title` varchar(512) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `public_tags`
--

INSERT INTO `public_tags` (`id`, `guid`, `str`, `createdOn`, `updatedOn`, `creator`, `owner`, `updatedby`, `chunk`, `rule`, `trash`, `title`, `description`) VALUES
(1, 'Lider', NULL, '2023-03-12 04:47:56', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Lider', 'Lider'),
(2, 'Ayudante', NULL, '2023-03-12 04:48:03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Ayudante', 'Ayudante'),
(3, 'Individualista', NULL, '2023-03-12 04:48:11', '2023-03-12 04:48:56', NULL, NULL, 1, NULL, NULL, NULL, 'Individualista', 'Individualista');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_tasks`
--

CREATE TABLE `public_tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `expiration` timestamp NULL DEFAULT NULL,
  `code` varchar(512) DEFAULT NULL,
  `title` varchar(512) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `meta` longtext DEFAULT NULL,
  `note` longtext DEFAULT NULL,
  `customers_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `public_tasks`
--

INSERT INTO `public_tasks` (`id`, `guid`, `str`, `createdOn`, `updatedOn`, `creator`, `owner`, `updatedby`, `chunk`, `rule`, `trash`, `expiration`, `code`, `title`, `description`, `meta`, `note`, `customers_id`) VALUES
(1, 'cc42038a-41d2-4815-b2a5-696a07a8a7f9', '', '2023-03-12 04:48:56', NULL, 1, 1, NULL, NULL, NULL, 0, '2023-03-12 04:00:00', NULL, 'test', '', '5', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_tasks_x_tags`
--

CREATE TABLE `public_tasks_x_tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `tags_id` bigint(20) UNSIGNED DEFAULT NULL,
  `tasks_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `public_tasks_x_tags`
--

INSERT INTO `public_tasks_x_tags` (`id`, `guid`, `str`, `createdOn`, `updatedOn`, `creator`, `owner`, `updatedby`, `chunk`, `rule`, `trash`, `tags_id`, `tasks_id`) VALUES
(1, 'd9573f33-1835-4bd4-8603-154fcf858831', '', '2023-03-12 04:48:56', NULL, 1, 1, NULL, NULL, NULL, 0, 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_task_x_status`
--

CREATE TABLE `public_task_x_status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `status_id` bigint(20) UNSIGNED DEFAULT NULL,
  `tasks_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_users`
--

CREATE TABLE `public_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guid` varchar(64) NOT NULL,
  `str` varchar(128) DEFAULT NULL,
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedOn` timestamp NULL DEFAULT NULL,
  `creator` int(11) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  `updatedby` int(11) DEFAULT NULL,
  `chunk` int(11) DEFAULT NULL,
  `rule` varchar(128) DEFAULT NULL,
  `trash` tinyint(1) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `email` varchar(512) DEFAULT NULL,
  `customers_id` bigint(20) UNSIGNED DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `lang` varchar(128) DEFAULT NULL,
  `timezone` varchar(128) DEFAULT NULL,
  `loginFailedCount` varchar(255) DEFAULT NULL,
  `lastPasswordUpdate` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `public_users`
--

INSERT INTO `public_users` (`id`, `guid`, `str`, `createdOn`, `updatedOn`, `creator`, `owner`, `updatedby`, `chunk`, `rule`, `trash`, `password`, `role_id`, `status`, `email`, `customers_id`, `username`, `lang`, `timezone`, `loginFailedCount`, `lastPasswordUpdate`) VALUES
(1, '8b358e69-2285-47e0-ae54-76f3e7bb514f', '', '2023-03-12 04:23:25', NULL, 11, 11, NULL, NULL, NULL, 0, '$2b$10$TdCTFftV7TgPTvmSC9XgQ.0XwT8hbEtKnn5pa9sbz9SM4eG67JOxK', NULL, NULL, NULL, NULL, 'system', NULL, NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `private_chunks`
--
ALTER TABLE `private_chunks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `private_clientapps`
--
ALTER TABLE `private_clientapps`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `private_logs`
--
ALTER TABLE `private_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `private_parameters`
--
ALTER TABLE `private_parameters`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `private_roles`
--
ALTER TABLE `private_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `private_translations`
--
ALTER TABLE `private_translations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `private_usersxchunks`
--
ALTER TABLE `private_usersxchunks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `private_usersxroles`
--
ALTER TABLE `private_usersxroles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `public_customers`
--
ALTER TABLE `public_customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_public_customers_public_users` (`users_id`);

--
-- Indices de la tabla `public_customers_x_tags`
--
ALTER TABLE `public_customers_x_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_public_customers_x_tags_public_tags` (`tags_id`),
  ADD KEY `fk_public_customers_x_tags_public_customers` (`customers_id`);

--
-- Indices de la tabla `public_status`
--
ALTER TABLE `public_status`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `public_tags`
--
ALTER TABLE `public_tags`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `public_tasks`
--
ALTER TABLE `public_tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_public_tasks_public_customers` (`customers_id`);

--
-- Indices de la tabla `public_tasks_x_tags`
--
ALTER TABLE `public_tasks_x_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_public_tasks_x_tags_public_tags` (`tags_id`),
  ADD KEY `fk_public_tasks_x_tags_public_tasks` (`tasks_id`);

--
-- Indices de la tabla `public_task_x_status`
--
ALTER TABLE `public_task_x_status`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_public_task_x_status_public_status` (`status_id`),
  ADD KEY `fk_public_task_x_status_public_tasks` (`tasks_id`);

--
-- Indices de la tabla `public_users`
--
ALTER TABLE `public_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `private_chunks`
--
ALTER TABLE `private_chunks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `private_clientapps`
--
ALTER TABLE `private_clientapps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `private_logs`
--
ALTER TABLE `private_logs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `private_parameters`
--
ALTER TABLE `private_parameters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `private_roles`
--
ALTER TABLE `private_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `private_translations`
--
ALTER TABLE `private_translations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `private_usersxchunks`
--
ALTER TABLE `private_usersxchunks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `private_usersxroles`
--
ALTER TABLE `private_usersxroles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `public_customers`
--
ALTER TABLE `public_customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `public_customers_x_tags`
--
ALTER TABLE `public_customers_x_tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `public_status`
--
ALTER TABLE `public_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `public_tags`
--
ALTER TABLE `public_tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `public_tasks`
--
ALTER TABLE `public_tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `public_tasks_x_tags`
--
ALTER TABLE `public_tasks_x_tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `public_task_x_status`
--
ALTER TABLE `public_task_x_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `public_users`
--
ALTER TABLE `public_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `public_customers`
--
ALTER TABLE `public_customers`
  ADD CONSTRAINT `fk_public_customers_public_users` FOREIGN KEY (`users_id`) REFERENCES `public_users` (`id`);

--
-- Filtros para la tabla `public_customers_x_tags`
--
ALTER TABLE `public_customers_x_tags`
  ADD CONSTRAINT `fk_public_customers_x_tags_public_customers` FOREIGN KEY (`customers_id`) REFERENCES `public_customers` (`id`),
  ADD CONSTRAINT `fk_public_customers_x_tags_public_tags` FOREIGN KEY (`tags_id`) REFERENCES `public_tags` (`id`);

--
-- Filtros para la tabla `public_tasks`
--
ALTER TABLE `public_tasks`
  ADD CONSTRAINT `fk_public_tasks_public_customers` FOREIGN KEY (`customers_id`) REFERENCES `public_customers` (`id`);

--
-- Filtros para la tabla `public_tasks_x_tags`
--
ALTER TABLE `public_tasks_x_tags`
  ADD CONSTRAINT `fk_public_tasks_x_tags_public_tags` FOREIGN KEY (`tags_id`) REFERENCES `public_tags` (`id`),
  ADD CONSTRAINT `fk_public_tasks_x_tags_public_tasks` FOREIGN KEY (`tasks_id`) REFERENCES `public_tasks` (`id`);

--
-- Filtros para la tabla `public_task_x_status`
--
ALTER TABLE `public_task_x_status`
  ADD CONSTRAINT `fk_public_task_x_status_public_status` FOREIGN KEY (`status_id`) REFERENCES `public_status` (`id`),
  ADD CONSTRAINT `fk_public_task_x_status_public_tasks` FOREIGN KEY (`tasks_id`) REFERENCES `public_tasks` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
