-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 18, 2018 at 06:30 PM
-- Server version: 5.6.35
-- PHP Version: 7.0.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pisfit`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(64) NOT NULL,
  `title_ua` varchar(255) NOT NULL,
  `date_ua` varchar(255) NOT NULL,
  `text_ua` text NOT NULL,
  `end_ua` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `file_src` varchar(255) NOT NULL,
  `title_eng` varchar(255) NOT NULL,
  `date_eng` varchar(255) NOT NULL,
  `text_eng` text NOT NULL,
  `end_eng` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title_ua`, `date_ua`, `text_ua`, `end_ua`, `img`, `file_src`, `title_eng`, `date_eng`, `text_eng`, `end_eng`) VALUES
(1, 'Міс факультету інформаційних технологій 2017', '', 'Побутує думка, що поняття «краси» і «розуму» в одній дівчині одночасно не уживаються. Не рідко можна й почути, що нібито на технічних факультетах дівчат важко відрізнити від хлопців. 31-го березня в актовій залі Інституту післядипломної освіти чарівні учасниці конкурсу «Міс ФІТ 2017» доводили, що обидва твердження – лише вигадки злих язиків..', 'Запрошуємо всіх бажаючих! Ми чекаємо на Вас!', 'event1.jpg', '', 'Miss Faculty of Information Technology 2017', '', 'It is believed that the concepts of \"beauty\" and \"reason\" in one girl do not coexist simultaneously. It is not uncommon to hear that it\'s hard to distinguish between girls at the technical faculties of the guys. On March 31, in the assembly hall of the Institute of Postgraduate Education, the enchanting participants of the Miss FIT 2017 contest argued that both statements were mere fabrications of evil tongues.', 'We invite everyone! We are waiting for you!'),
(2, 'День відкритих дверей Факультету інформаційних технологій!', '', 'Шановні абітурієнти! Запрошуємо Вас відвідати День відкритих дверей Факультету інформаційних технологій, що відбудеться 22 квітня  2017 року о 15.00 (вул. Ванди Василевської 24, актова зала). Під час зустрічі Ви зможете отримати інформацію про факультет, ознайомитися зі всіма спеціальностями  та освітніми програмами, дізнатися про особливості  вступу у 2017 році! Кожен з присутніх буде мати нагоду поставити запитання декану, завідувачам кафедр, викладачам, а також студентам, що вже навчаються на факультеті!', 'Запрошуємо всіх бажаючих! Ми чекаємо на Вас!', 'event2.jpg', '', 'Open Doors Day of the Faculty of Information Technologies!', '', 'Dear entrants! We invite you to attend the Open Doors Day of the Faculty of Information Technologies, which will be held on April 22, 2017 at 15.00 (Vandi Vasilevskaya St. 24, Assembly Hall). During the meeting you will be able to get information about the faculty, get acquainted with all specialties and educational programs, learn about the features of joining in 2017! Each of the participants will have the opportunity to ask the dean, the heads of the departments, the teachers, as well as the students who are already studying at the faculty!', 'We invite everyone! We are waiting for you!');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(64) NOT NULL,
  `title_ua` varchar(255) NOT NULL,
  `date_ua` varchar(255) NOT NULL,
  `text_ua` text NOT NULL,
  `end_ua` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `file_src` varchar(255) NOT NULL,
  `title_eng` varchar(255) NOT NULL,
  `date_eng` varchar(255) NOT NULL,
  `text_eng` text NOT NULL,
  `end_eng` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title_ua`, `date_ua`, `text_ua`, `end_ua`, `img`, `file_src`, `title_eng`, `date_eng`, `text_eng`, `end_eng`) VALUES
(1, 'Серія лекцій на тему айті-підприємництво', 'від 3-го березня 2017', 'Кожного вівторка о 14:10 в актовій залі факультету інформаційних технологій запрошений спеціаліст Євгеній Ленг читає лекції на тему айті-підприємництво.', 'Запрошуємо всіх бажаючих!', 'news2.jpg', '', 'A series of lectures on topic-entrepreneurship', 'from March 3, 2017', 'Every Tuesday at 14:10 in the assembly hall of the Faculty of Information Technologies, an invited specialist, Yevgeny Lang, lectures on topic-entrepreneurship.', 'We invite everyone!'),
(2, 'Глобальний форум кібер-безпеки', 'середина квітня 2017', 'В середині травня буде проходити глобальний форум кібербезпеки в дата центрі Парковий, в якому прийматиме участь і наша кафедра ПІС.', 'Запрошуємо всіх бажаючих прийняти участь!', 'news1.jpg', '', 'Global Cybersecurity Forum', 'mid-April 2017', 'In mid-May, a global cybersecurity forum will be held in the Parkovy Park center, in which our PIS department will also take part.', ''),
(5, 'Міжнародна науково-практична конференція', '29-30 вересня 2017 року', 'На базі факультету інформаційних технологій Київського національного університету імені Тараса Шевченка відбулась Міжнародна науково-практична конференція «Розбудова економічної освіти та формування основ фінансової грамотності учнівської молоді – основа розвитку громадянського суспільства та становлення економіки знань» Участь у конференції прийняли педагоги, науковці, викладачі ВНЗ, методисти, фахівці у галузі інформаційних технологій і прикладних дисциплін, фахівці навчальних центрів і бізнес-структур, менеджери та керівники навчальних закладів, аспіранти та докторанти', 'детальна інформація:', 'news3.png', 'https://drive.google.com/file/d/0BwuOv3Xw53PoZGQteGJvV0pJY3c/view?usp=sharing', 'International scientific and practical conference', 'September 29-30, 2017', 'On the basis of the Faculty of Information Technologies of the Kyiv National Taras Shevchenko University, the International Scientific and Practical Conference \"Strengthening Economic Education and Formation of Fundamentals of Financial Literacy for Students - The Basis for the Development of Civil Society and the Formation of the Knowledge Economy\" was held. The conference was attended by teachers, academics, university lecturers, methodists , specialists in the field of information technologies and applied disciplines, specialists of training centers and business structures, managers and manager education, graduate and doctoral students', 'detailed information:'),
(6, 'е-Congress 2017', '5 жовтня 2017 року', 'Представники кафедри прикладних інформаційних систем прийняли участь у форумі  е-Congress 2017. Бізнес-подія нового формату, яка задає порядок денний «на завтра», тестує нові ідеї та бізнес-підходи, презентує кращий європейський та український досвід в сфері e-commerce. Місце зустрічі лідерів галузі, обміну досвідом з визнаними експертами і нові знайомства для розвитку бізнесу. Виставка, яка об\'єднує провідні компанії, які обслуговують ринок e-commerce. Це відмінний спосіб заощадити час для вибору нового партнера або підрядника, тим більше, що у відмінній атмосфері бізнес-переговори йдуть набагато простіше!', 'детальна інформація:', 'news4.jpg', 'http://e-congress.com.ua', 'е-Congress 2017', 'October 5, 2017', 'Representatives of the Department of Applied Information Systems took part in the e-Congress 2017 forum. A new business event, which sets the agenda for tomorrow, tests new ideas and business approaches, presents the best European and Ukrainian experience in e-commerce. A meeting place for industry leaders, sharing experiences with recognized experts and new acquaintances for business development. An exhibition that brings together leading companies that serve the e-commerce market. This is a great way to save time by choosing a new partner or contractor, all the more so in a great atmosphere, business negotiations are much easier!', 'detailed information:'),
(9, 'Зустріч з EPAM та Microsoft', '7 листопада 2017', 'Відбулась зустріч з представниками провідних ІТ компаній України EPAM та Microsoft. Було представлено сучасні тенденції у розробці програмного забезпечення виступами на тему \"Кодогенерація, спрощення життя в повсякденних задачах\" та \"Turn Off JavaScript\"', '', 'news5.jpg', '', 'Meeting with EPAM and Microsoft', 'November 7, 2017', 'A meeting was held with representatives of leading IT companies of Ukraine EPAM and Microsoft. The present trends in software development on \"Codogeneration, Simplification of Life in Everyday Challenges\" and \"Turn Off JavaScript\" were presented.', ''),
(10, 'Участь кафедри в семінарі', '23 січня 2018', '23 та 24 січня відбувся семінар ТАЕІХ \"Механізми захисту в інфраструктурі відкритих ключів\" за участі завідувача кафедри прикладних інформаційних систем як члена «Всеукраїнської асоціації «Інформаційна безпека та інформаційні технології».', 'детальна інформація:', 'news6.png', 'https://drive.google.com/file/d/1oSjdX3pELKIE0FJMCNW5T3rC3p6SGzf5/view?usp=sharing', 'Participation of the department in the seminar', 'January 23, 2018', '\r\nOn January 23 and 24 a TAEIK workshop \"Mechanisms of protection in public key infrastructure\" was held with the participation of the head of the department of applied information systems as a member of the All-Ukrainian Association \"Information Security and Information Technologies\".', 'detailed information:');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
