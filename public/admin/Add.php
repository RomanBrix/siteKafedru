<?php
/**
 * Created by PhpStorm.
 * User: RomkaBrix
 * Date: 2/19/18
 * Time: 20:49
 */
$data = json_decode(file_get_contents("php://input"), true);

    require_once '../conection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $sql = "INSERT INTO news 
              (
              title_ua,
              title_eng,
              date_ua,
              date_eng,
              text_ua,
              text_eng,
              end_ua,
              end_eng,
              file_src,
              img
              ) 
              VALUES 
              (
              '" . $data[title_ua] . "','"
            . $data[title_eng] . "','"
            . $data[date_ua] . "','"
            . $data[date_eng] . "','"
            . $data[text_ua] . "','"
            . $data[text_eng] . "','"
            . $data[end_ua] . "','"
            . $data[end_eng] . "','"
            . $data[file] . "','"
            . $data[img] . "');";

        if($data[type] === "events"){
            $sql = "INSERT INTO events 
              (
              title_ua,
              title_eng,
              date_ua,
              date_eng,
              text_ua,
              text_eng,
              end_ua,
              end_eng,
              file_src,
              img
              ) 
              VALUES 
              (
              '" . $data[title_ua] . "','"
                . $data[title_eng] . "','"
                . $data[date_ua] . "','"
                . $data[date_eng] . "','"
                . $data[text_ua] . "','"
                . $data[text_eng] . "','"
                . $data[end_ua] . "','"
                . $data[end_eng] . "','"
                . $data[file] . "','"
                . $data[img] . "');";
        }
        if ($link->query($sql) === TRUE) {
            print_r(json_encode(true));
        } else {
            print_r(json_encode(false));
        }
        mysqli_close($link);
}
