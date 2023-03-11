-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2023 a las 16:59:20
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
-- Base de datos: `core`
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
  `description` varchar(1024) DEFAULT NULL,
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
  `content` mediumtext DEFAULT NULL,
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
(2, '86baebba-c357-4603-8956-0c72e5bb1d23', '', '2023-01-26 03:20:34', NULL, 0, 0, NULL, NULL, NULL, 0, 'allowMultiSession', 'false'),
(3, '05e0bace-4acb-41b6-b23b-62484e47460d', '', '2023-01-26 03:20:34', NULL, 0, 0, NULL, NULL, NULL, 0, 'allowGroupSegmentation', 'true'),
(4, 'a0c3a138-e06d-409b-b372-31db5e08ba53', '', '2023-01-26 03:20:34', NULL, 0, 0, NULL, NULL, NULL, 0, 'allowUserRegistration', 'true'),
(5, 'f30a4cc0-d74c-4e3b-90f9-556624f1fcd3', '', '2023-01-26 03:20:34', NULL, 0, 0, NULL, NULL, NULL, 0, 'emailConfirmRegistration', 'true'),
(6, 'a8be3a1a-1892-4600-9c83-f4a00024ba88', '', '2023-01-26 03:20:34', NULL, 0, 0, NULL, NULL, NULL, 0, 'maxLoginFailedCount', '3'),
(7, 'bf95b0c2-55eb-4a8c-b651-664318573c03', '', '2023-01-26 03:20:34', NULL, 0, 0, NULL, NULL, NULL, 0, 'systemKey', 'ef47e181-3cc7-4d48-bcf2-1ce87302a658'),
(8, '5609d377-7ad1-4614-9b86-4ee96a854681', '', '2023-01-26 03:20:34', NULL, 0, 0, NULL, NULL, NULL, 0, 'sessionDuration', '1200000'),
(9, '7065dec3-d6f0-4f0a-8dbe-321f96bcf8a9', '', '2023-01-26 03:20:34', NULL, 0, 0, NULL, NULL, NULL, 0, 'authorizationLevel', '10');

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

INSERT INTO `private_roles` (`id`, `guid`, `str`, `createdOn`, `updatedOn`, `creator`, `owner`, `updatedby`, `chunk`, `rule`, `trash`, `meta`, `name`, `isUserExtension`, `_create`, `_update`, `_delete`, `_read`, `_share`, `_transfer`, `_clientapp`) VALUES
(1, '8622abab-246d-4734-904b-6df0360fb12b', '', '2023-01-26 03:20:34', '2023-01-30 02:50:17', 0, 0, 0, NULL, NULL, 0, 'clients', 'clients', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, '8841ff66-3ea2-4089-8e3c-68de54d180a2', '', '2023-01-26 03:20:34', '2023-01-27 02:42:32', 0, 0, 0, NULL, NULL, 0, 'admins', 'admins', 1, 9, 9, 9, 9, 9, 9, 9),
(3, 'ec8675af-8dbe-40f1-a648-34b53ec97bb2', '', '2023-01-26 03:20:34', '2023-01-26 13:28:29', 0, 0, 0, NULL, NULL, 0, 'system', 'System', 1, 10, 10, 10, 10, 10, 10, 10),
(4, 'e8fc0ff8-0f94-4f5e-9e00-83af816ccce7', '', '2023-01-28 16:39:39', NULL, 0, 0, NULL, NULL, NULL, 0, 'admins', 'admins1', NULL, 0, 0, 0, 0, NULL, NULL, NULL),
(5, 'ac53dc49-5f5f-4bef-bc36-f67d0e27f2f4', '', '2023-01-28 16:48:25', NULL, 0, 0, NULL, NULL, NULL, 0, 'admins', 'admins2', NULL, 0, 0, 0, 0, NULL, NULL, NULL),
(6, '9b54732a-4915-4a13-adfa-d2550f872acf', '', '2023-01-29 17:32:24', NULL, 0, 0, NULL, NULL, NULL, 0, 'admins', 'admins', NULL, 9, 9, 9, 9, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `private_sessions`
--

CREATE TABLE `private_sessions` (
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
  `status` int(11) DEFAULT NULL,
  `sessionId` varchar(128) DEFAULT NULL,
  `ipAddress` varchar(128) DEFAULT NULL,
  `userAgent` varchar(128) DEFAULT NULL,
  `lastActivity` varchar(255) DEFAULT NULL,
  `users_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `private_sessions`
--

INSERT INTO `private_sessions` (`id`, `guid`, `str`, `createdOn`, `updatedOn`, `creator`, `owner`, `updatedby`, `chunk`, `rule`, `trash`, `status`, `sessionId`, `ipAddress`, `userAgent`, `lastActivity`, `users_id`) VALUES
(2, '15cdade3-afb9-423c-aa9f-b08bdb3249eb', '', '2023-01-26 13:28:29', NULL, 0, 0, NULL, NULL, NULL, 0, NULL, 'c2814e25-eac6-434c-8a77-de28fad5964c', NULL, NULL, '2023-1-26 9:28:29', 1);

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
(1, '83a67def-7729-4444-b804-ab5996b427ab', '', '2023-01-26 03:20:34', '2023-01-26 13:28:29', 0, 0, 0, NULL, NULL, 0, 3, 1),
(2, 'e04c3472-0565-4f82-b600-e4e944354854', '', '2023-01-27 02:19:39', NULL, 0, 0, NULL, NULL, NULL, 0, 2, 9),
(3, '9c2db6eb-ae43-4d66-8317-f8c0e5fee5f2', '', '2023-01-27 02:19:42', NULL, 0, 0, NULL, NULL, NULL, 0, 2, 10),
(4, '66f6ceff-3db1-42da-b47f-00f3c8cc150d', '', '2023-01-27 02:42:32', NULL, 0, 0, NULL, NULL, NULL, 0, 2, 11),
(5, '1af4b685-5324-4796-9d6a-917146d22ee3', '', '2023-01-30 02:50:17', NULL, 0, 0, NULL, NULL, NULL, 0, 1, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_admins`
--

CREATE TABLE `public_admins` (
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
  `uniqueaccessid` varchar(512) DEFAULT NULL,
  `tickets_id` bigint(20) UNSIGNED DEFAULT NULL,
  `users_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_clients`
--

CREATE TABLE `public_clients` (
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
  `phone` varchar(512) DEFAULT NULL,
  `address1` varchar(512) DEFAULT NULL,
  `address2` varchar(512) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `company` varchar(512) DEFAULT NULL,
  `birthdate` timestamp NULL DEFAULT NULL,
  `status` varchar(128) DEFAULT NULL,
  `users_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_dbconnection`
--

CREATE TABLE `public_dbconnection` (
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
  `username` varchar(512) DEFAULT NULL,
  `pass` varchar(512) DEFAULT NULL,
  `host` varchar(512) DEFAULT NULL,
  `port` varchar(512) DEFAULT NULL,
  `tenants_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `public_dbconnection`
--

INSERT INTO `public_dbconnection` (`id`, `guid`, `str`, `createdOn`, `updatedOn`, `creator`, `owner`, `updatedby`, `chunk`, `rule`, `trash`, `username`, `pass`, `host`, `port`, `tenants_id`) VALUES
(1, 'de0c326c-5cd1-4059-a5c2-08dbf643411c', '', '2023-01-28 18:14:30', NULL, 0, 0, NULL, NULL, NULL, 0, '', '', '', '', 0),
(4, '18f04b22-45ba-4973-890c-0d28e357c2e1', '', '2023-01-28 18:17:08', NULL, 0, 0, NULL, NULL, NULL, 0, '', '', '', '', 2),
(5, '90f24b06-11a9-42d0-95e4-f10fd2860638', '', '2023-01-29 17:38:15', NULL, 0, 0, NULL, NULL, NULL, 0, '', '', '', '', 3),
(6, 'ec2aaef4-12ae-453b-a9c5-984e28eda1b7', '', '2023-01-29 18:18:19', NULL, 0, 0, NULL, NULL, NULL, 0, '', '', '', '', 4),
(7, 'e7d98462-13c6-4efc-a9b7-fcbe9dab0d35', '', '2023-01-29 18:22:11', NULL, 0, 0, NULL, NULL, NULL, 0, '', '', '', '', 5),
(8, '2d910e07-4657-4132-a78a-7091b190f029', '', '2023-01-29 18:22:41', NULL, 0, 0, NULL, NULL, NULL, 0, '', '', '', '', 6),
(9, 'b46be8d4-cd85-4328-b171-fb7a2ada9197', '', '2023-01-29 18:23:01', NULL, 0, 0, NULL, NULL, NULL, 0, '', '', '', '', 7),
(10, '6aa498d3-ca07-450c-bede-059a3c82f62f', '', '2023-01-29 18:23:40', NULL, 0, 0, NULL, NULL, NULL, 0, '', '', '', '', 8),
(11, 'acb5c3d2-7752-425d-b87b-4ae09ed1333b', '', '2023-01-30 02:56:39', NULL, 0, 0, NULL, NULL, NULL, 0, '', '', '', '', 9),
(12, 'a400a3b6-f721-4013-8522-e8de4a401ba4', '', '2023-01-30 03:00:18', NULL, 0, 0, NULL, NULL, NULL, 0, '', '', '', '', 10),
(13, '33d3157b-c636-452c-b352-bff22838968b', '', '2023-01-30 03:04:50', NULL, 12, 12, NULL, NULL, NULL, 0, '', '', '', '', 11),
(14, '50bb19f9-8bca-44c2-971b-08ea4350fabe', '', '2023-01-30 03:10:06', NULL, 12, 12, NULL, NULL, NULL, 0, '', '', '', '', 12),
(15, '1d7c8d8a-2a8f-4283-a60d-7a9fd08afe21', '', '2023-01-30 03:10:16', NULL, 12, 12, NULL, NULL, NULL, 0, '', '', '', '', 13),
(16, '16beb289-40db-4ee6-858b-fc2b0fa0be3f', '', '2023-01-30 03:10:24', NULL, 12, 12, NULL, NULL, NULL, 0, '', '', '', '', 14),
(17, '8de2297a-7033-4c05-8416-f48cb0697ae6', '', '2023-02-03 16:01:42', NULL, 11, 11, NULL, NULL, NULL, 0, '', '', '', '', 37),
(18, 'a82c46e7-46f4-4fac-b325-e1e74e4a50dc', '', '2023-03-11 02:29:24', NULL, 11, 11, NULL, NULL, NULL, 0, '', '', '', '', 39);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_payments`
--

CREATE TABLE `public_payments` (
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
  `method` varchar(128) DEFAULT NULL,
  `meta` mediumtext DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `status` varchar(128) DEFAULT NULL,
  `subscriptions_id` bigint(20) UNSIGNED DEFAULT NULL,
  `clients_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_subscriptions`
--

CREATE TABLE `public_subscriptions` (
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
  `name` varchar(512) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `code` varchar(512) DEFAULT NULL,
  `expirationDate` timestamp NULL DEFAULT NULL,
  `maxDatabases` int(11) DEFAULT NULL,
  `maxTables` int(11) DEFAULT NULL,
  `maxRoles` int(11) DEFAULT NULL,
  `maxUsers` int(11) DEFAULT NULL,
  `maxStorage` int(11) DEFAULT NULL,
  `maxDatatransfer` int(11) DEFAULT NULL,
  `complexLevel` int(11) DEFAULT NULL,
  `isCustom` tinyint(1) DEFAULT NULL,
  `status` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_tenants`
--

CREATE TABLE `public_tenants` (
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
  `name` varchar(512) DEFAULT NULL,
  `alias` varchar(512) DEFAULT NULL,
  `status` varchar(128) DEFAULT NULL,
  `publickey` varchar(512) DEFAULT NULL,
  `privatekey` varchar(512) DEFAULT NULL,
  `systemkey` varchar(512) DEFAULT NULL,
  `password` varchar(512) DEFAULT NULL,
  `expirationDate` timestamp NULL DEFAULT NULL,
  `settings` mediumtext DEFAULT NULL,
  `host` varchar(512) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `dbconnection_id` bigint(20) UNSIGNED DEFAULT NULL,
  `clients_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `public_tenants`
--

INSERT INTO `public_tenants` (`id`, `guid`, `str`, `createdOn`, `updatedOn`, `creator`, `owner`, `updatedby`, `chunk`, `rule`, `trash`, `name`, `alias`, `status`, `publickey`, `privatekey`, `systemkey`, `password`, `expirationDate`, `settings`, `host`, `logo`, `dbconnection_id`, `clients_id`) VALUES
(3, '4f7c52b9-45e8-4484-8872-1998a3912b77', '', '2023-01-29 17:38:15', NULL, 0, 0, NULL, NULL, NULL, 0, '2eb1f767-dc01-4600-9dd4-cf080383152e', 'sample1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 5, NULL),
(4, 'ac517c12-1860-4d80-a3cb-d7bc2b294601', '', '2023-01-29 18:18:19', NULL, 0, 0, NULL, NULL, NULL, 0, '8dc37761-aeea-43cb-83f0-c7d4a77d568e', 'sample2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 6, NULL),
(5, 'aaaf56aa-3456-4c50-8431-9488614ab65c', '', '2023-01-29 18:22:11', NULL, 0, 0, NULL, NULL, NULL, 0, NULL, 'sample3', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 7, NULL),
(6, '055895e8-6de3-4c43-952e-07cd5733054d', '', '2023-01-29 18:22:41', NULL, 0, 0, NULL, NULL, NULL, 0, NULL, 'sample4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 8, NULL),
(8, 'e937032c-15a4-4d4b-a541-f498249de138', '', '2023-01-29 18:23:40', NULL, 0, 2, NULL, NULL, NULL, 0, NULL, 'sample5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 10, NULL),
(9, '0898f450-82f9-4a0e-838b-fef8fe881f09', '', '2023-01-30 02:56:39', NULL, 0, 0, NULL, NULL, NULL, 0, NULL, 'sample6', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 11, NULL),
(10, '4668a4e0-b22e-40d6-9680-3b8317c32543', '', '2023-01-30 03:00:18', NULL, 0, 0, NULL, NULL, NULL, 0, NULL, 'sample7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 12, NULL),
(11, '17a3af91-7e7f-43d3-9541-49c761c5af6b', '', '2023-01-30 03:04:50', NULL, 12, 11, NULL, NULL, NULL, 0, NULL, 'sample8', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 13, NULL),
(12, 'cba781bb-36d4-456e-9d15-85afc83d41e2', '', '2023-01-30 03:10:06', NULL, 12, 11, NULL, NULL, NULL, 0, NULL, 'sample7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 14, NULL),
(13, 'c9c2b5c0-b36e-4a1a-90a0-be4c4f4647e3', '', '2023-01-30 03:10:16', NULL, 12, 11, NULL, NULL, NULL, 0, NULL, 'sample6', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 15, NULL),
(14, '3c4f1dd7-b3ad-4b53-ade0-2e1e33fdfe00', '', '2023-01-30 03:10:24', NULL, 12, 12, NULL, NULL, NULL, 0, NULL, 'sample9', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 16, NULL),
(15, 'f1bfdcb8-3029-4fff-9176-77a0f62fb4c5', '', '2023-02-02 02:17:07', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'df', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 'c0414c5f-80f6-40ff-9ac2-c88167ca3cdf', '', '2023-02-02 02:17:21', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'asdasd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(17, '0f0f3d8b-eafb-4e37-b643-1a6edb1a42b0', '', '2023-02-02 02:17:25', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'asdasd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(18, '01db3b2c-5f06-49c7-8ec1-174921efcc06', '', '2023-02-02 02:17:29', NULL, 11, 11, NULL, NULL, NULL, 0, '', '434343', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(19, '9d8c12de-289e-4180-aa3e-95d6f83c9d93', '', '2023-02-02 02:17:32', NULL, 11, 11, NULL, NULL, NULL, 0, '', '4343', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(20, '69d361a5-a5c3-480e-b69e-fc9e90ff45aa', '', '2023-02-02 02:18:26', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'fdfdfd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, '128e8178-615a-4dd9-b3cb-365554e104b7', '', '2023-02-02 02:18:45', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'dsds', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(22, '3f14f90f-1a0c-4689-884b-a4f1e4e3567f', '', '2023-02-02 02:20:02', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'xsdsd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(23, '507ba3e2-744b-4c94-8d15-951a44cd2e33', '', '2023-02-02 02:20:07', NULL, 11, 11, NULL, NULL, NULL, 0, '', '4343434343', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(24, 'f219a05d-249c-48f0-8c78-1f4b4c71064f', '', '2023-02-02 02:20:28', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'Sistema de Inventario', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(25, 'd8068880-153b-4ee6-bd69-fb314cd73df2', '', '2023-02-03 02:34:19', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'asdasdads', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(26, 'd5c2dd9d-77c1-4f7c-836b-8e3da15bff52', '', '2023-02-03 02:39:02', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'dsdasdad', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(27, 'dde9f5d6-9304-4c39-b6f2-218cdfb17056', '', '2023-02-03 02:39:39', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'asdadasds', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(28, '1e4b7473-67fc-4dd8-8c51-39cc61dbf1c2', '', '2023-02-03 02:39:43', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'dsdsd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(29, '3521530f-a3ba-4e4d-8d5f-83311fd9e837', '', '2023-02-03 02:40:11', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'dsdsds', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(30, '941b0a2b-8b3f-46c8-b5e5-df4e0162cd88', '', '2023-02-03 02:40:47', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'eweeewew', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(31, '58aea5d5-1481-48c7-9875-84a09b107f16', '', '2023-02-03 02:40:53', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'ssssssss', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(32, 'f32b42cd-a620-4eec-898d-bc9cf84f618a', '', '2023-02-03 02:41:03', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'dsdsdsdsds', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(33, '6ed2d3c3-9ce0-4e71-bf13-d0c0055af824', '', '2023-02-03 02:41:26', NULL, 11, 11, NULL, NULL, NULL, 0, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(34, '49f5ea2d-4911-4734-adf4-5fc22e06bb48', '', '2023-02-03 03:19:46', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'asdasdads', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(35, '2d861e08-8779-44cb-86c6-475ad5f9087f', '', '2023-02-03 03:22:23', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'asdsadasd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(36, '79a6c493-73e2-45e6-80ed-47b26a7efffc', '', '2023-02-03 03:23:16', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'test22222', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(37, 'c35dee05-fff3-420b-84f7-c911686d2556', '', '2023-02-03 16:01:42', NULL, 11, 11, NULL, NULL, NULL, 0, NULL, 'sample99', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 17, NULL),
(38, '4fcb5311-0c6c-4cd7-8c3f-21a7b2697efd', '', '2023-02-11 16:07:52', NULL, 11, 11, NULL, NULL, NULL, 0, '', 'sample99', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(39, 'a6a5787d-7fac-4c57-8e04-686dc8a57408', '', '2023-03-11 02:29:24', NULL, 11, 11, NULL, NULL, NULL, 0, NULL, 'eisenhower', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 18, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `public_tickets`
--

CREATE TABLE `public_tickets` (
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
  `code` varchar(512) DEFAULT NULL,
  `description` mediumtext DEFAULT NULL,
  `status` varchar(128) DEFAULT NULL,
  `clients_id` bigint(20) UNSIGNED DEFAULT NULL
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
  `username` varchar(512) DEFAULT NULL,
  `admins_id` bigint(20) UNSIGNED DEFAULT NULL,
  `clients_id` bigint(20) UNSIGNED DEFAULT NULL,
  `email` varchar(512) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `lang` varchar(128) DEFAULT NULL,
  `timezone` varchar(128) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `loginFailedCount` varchar(255) DEFAULT NULL,
  `lastPasswordUpdate` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `public_users`
--

INSERT INTO `public_users` (`id`, `guid`, `str`, `createdOn`, `updatedOn`, `creator`, `owner`, `updatedby`, `chunk`, `rule`, `trash`, `username`, `admins_id`, `clients_id`, `email`, `password`, `lang`, `timezone`, `status`, `loginFailedCount`, `lastPasswordUpdate`) VALUES
(1, '59f8b4fb-9641-4491-99aa-3e6229ed7313', '', '2023-01-26 03:17:44', '2023-01-26 13:28:29', 0, 0, 0, NULL, NULL, 0, 'system', NULL, NULL, NULL, '$2b$10$BEvhxnwfhlKxuRuZjalISecVl5fUi0ku.qLMFHvEdF1Gjg97Fjcq.', '', '', NULL, NULL, NULL),
(2, '7d8f64b1-5341-4cf0-9c18-4356871a65de', '', '2023-01-27 02:15:01', NULL, 0, 0, NULL, NULL, NULL, 0, 'henry', NULL, NULL, '', '$2b$10$3sNSTiA8eQAu0jmU.OK/9O.BCQJnJKKu8lFnGzWqXWqj6dk90axzK', NULL, NULL, NULL, NULL, NULL),
(7, '16af6b82-d6a7-4ccb-8cf8-ee55e9441010', '', '2023-01-27 02:19:05', NULL, 0, 0, NULL, NULL, NULL, 0, 'henry2', NULL, NULL, '', '$2b$10$fWkF5PKNlg5MymoIPmi7Ou80C9kqrTwtY0uyKmfpxCiypFeMWPH1.', NULL, NULL, NULL, NULL, NULL),
(9, '53541d94-8677-4462-8d5e-6d21605001cd', '', '2023-01-27 02:19:39', NULL, 0, 0, NULL, NULL, NULL, 0, 'henry3', NULL, NULL, '', '$2b$10$CglSpV2Vvl2fb99QYNBpGOUNRkz.CcRQpMNuk1Oi7W0E4UxjJq.w6', NULL, NULL, NULL, NULL, NULL),
(10, '31e06c4a-fd53-45ac-9117-25c6372dbbdf', '', '2023-01-27 02:19:42', NULL, 0, 0, NULL, NULL, NULL, 0, 'henry4', NULL, NULL, '', '$2b$10$z0xDI499y.6nwnbeZIhhsu65GcG2vjKn4FCVb.R/MT0j6XtWHpmjS', NULL, NULL, NULL, NULL, NULL),
(11, '0ed2ec37-6d84-4a22-b722-cd8760acb821', '', '2023-01-27 02:42:32', '2023-01-29 17:32:24', 0, 0, 0, NULL, NULL, 0, 'henry5', NULL, NULL, '', '$2b$10$./Uu8a.GMx2JkweG6YdbROjtjAzaaMojdlbi5kRiG0KKF7Ds3Jbru', '', '', NULL, NULL, NULL),
(12, 'eafde481-39b5-4b63-adfc-0a705842e999', '', '2023-01-30 02:50:17', NULL, 0, 0, NULL, NULL, NULL, 0, 'henry6', NULL, NULL, '', '$2b$10$7UxVZWnKrWyuMzRy.RKwcOuEPD5yCzjLfOhMj.WwDA.v6OMpU0xoi', NULL, NULL, NULL, NULL, NULL);

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
-- Indices de la tabla `private_sessions`
--
ALTER TABLE `private_sessions`
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
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `public_admins`
--
ALTER TABLE `public_admins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_public_admins_public_tickets` (`tickets_id`),
  ADD KEY `fk_public_admins_public_users` (`users_id`);

--
-- Indices de la tabla `public_clients`
--
ALTER TABLE `public_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_public_clients_public_users` (`users_id`);

--
-- Indices de la tabla `public_dbconnection`
--
ALTER TABLE `public_dbconnection`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `public_payments`
--
ALTER TABLE `public_payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_public_payments_public_subscriptions` (`subscriptions_id`),
  ADD KEY `fk_public_payments_public_clients` (`clients_id`);

--
-- Indices de la tabla `public_subscriptions`
--
ALTER TABLE `public_subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `public_tenants`
--
ALTER TABLE `public_tenants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_public_tenants_public_dbconnection` (`dbconnection_id`),
  ADD KEY `fk_public_tenants_public_clients` (`clients_id`);

--
-- Indices de la tabla `public_tickets`
--
ALTER TABLE `public_tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_public_tickets_public_clients` (`clients_id`);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `private_roles`
--
ALTER TABLE `private_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `private_sessions`
--
ALTER TABLE `private_sessions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `private_usersxroles`
--
ALTER TABLE `private_usersxroles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `public_clients`
--
ALTER TABLE `public_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `public_dbconnection`
--
ALTER TABLE `public_dbconnection`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `public_tenants`
--
ALTER TABLE `public_tenants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `public_users`
--
ALTER TABLE `public_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `public_clients`
--
ALTER TABLE `public_clients`
  ADD CONSTRAINT `fk_public_clients_public_users` FOREIGN KEY (`users_id`) REFERENCES `public_users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
