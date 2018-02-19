<?php
/**
 * Created by PhpStorm.
 * User: RomkaBrix
 * Date: 2/19/18
 * Time: 14:09
 */
$data = json_decode(file_get_contents("php://input"), true);
if($data[type] === "news") {
    require_once '../conection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $sql = "";
        if ($data[img] === null) {
            $sql = "UPDATE news
                SET title_ua='" . $data[title_ua] . "',
                title_eng='" . $data[title_eng] . "',
                date_ua='" . $data[date_ua] . "',
                date_eng='" . $data[date_eng] . "',
                text_ua='" . $data[text_ua] . "',
                text_eng='" . $data[text_eng] . "',
                end_ua='" . $data[end_ua] . "',
                end_eng='" . $data[end_eng] . "',
                 file_src='" . $data[file] . "'
                WHERE id=" . $data[id] . "";
        } else {
            $sql = "UPDATE news
                SET title_ua='" . $data[title_ua] . "',
                title_eng='" . $data[title_eng] . "',
                date_ua='" . $data[date_ua] . "',
                date_eng='" . $data[date_eng] . "',
                text_ua='" . $data[text_ua] . "',
                text_eng='" . $data[text_eng] . "',
                end_ua='" . $data[end_ua] . "',
                end_eng='" . $data[end_eng] . "',
                 file_src='" . $data[file] . "',
                 img='" . $data[img] . "'
                WHERE id=" . $data[id] . "";

        }
        if ($link->query($sql) === TRUE) {
            print_r(json_encode("newValOk"));
        } else {
            print_r(json_encode(false));
        }
        mysqli_close($link);
    }
}elseif ($data[type] === "events"){

    require_once '../conection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $sql = "";
        if ($data[img] === null) {
            $sql = "UPDATE events
                SET title_ua='" . $data[title_ua] . "',
                title_eng='" . $data[title_eng] . "',
                date_ua='" . $data[date_ua] . "',
                date_eng='" . $data[date_eng] . "',
                text_ua='" . $data[text_ua] . "',
                text_eng='" . $data[text_eng] . "',
                end_ua='" . $data[end_ua] . "',
                end_eng='" . $data[end_eng] . "',
                 file_src='" . $data[file] . "'
                WHERE id=" . $data[id] . "";
        } else {
            $sql = "UPDATE events
                SET title_ua='" . $data[title_ua] . "',
                title_eng='" . $data[title_eng] . "',
                date_ua='" . $data[date_ua] . "',
                date_eng='" . $data[date_eng] . "',
                text_ua='" . $data[text_ua] . "',
                text_eng='" . $data[text_eng] . "',
                end_ua='" . $data[end_ua] . "',
                end_eng='" . $data[end_eng] . "',
                 file_src='" . $data[file] . "',
                 img='" . $data[img] . "'
                WHERE id=" . $data[id] . "";

        }
        if ($link->query($sql) === TRUE) {
            print_r(json_encode("newValOk"));
        } else {
            print_r(json_encode(false));
        }
        mysqli_close($link);
    }

}