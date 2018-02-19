<?php
/**
 * Created by PhpStorm.
 * User: RomkaBrix
 * Date: 2/19/18
 * Time: 21:22
 */
function generateCode($length=6) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHI JKLMNOPRQSTUVWXYZ0123456789";
    $code = "";
    $clen = strlen($chars) - 1;
    while (strlen($code) < $length) {
        $code .= $chars[mt_rand(0,$clen)];
    }
    return $code;
}
if($_GET['kind'] === "login") {
    require_once '../conection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));

    if ($link) {
        $userPassword = $_GET['pass'];
        $userLogin = $_GET['log'];


        $result = mysqli_query($link, "SELECT id, password FROM users WHERE login='" . mysqli_real_escape_string($link,
                $userLogin) . "' LIMIT 1");
        $data = mysqli_fetch_assoc($result);

        if ($data['password'] === md5(md5($userPassword))) {

            $hash = md5(generateCode(10));
            mysqli_query($link, "UPDATE users SET hash='" . $hash . "' WHERE id='" . $data['id'] . "'");
            setcookie("id", $data['id'], time() + (86400 / 2));
            setcookie("name", $userLogin, time() + (86400 / 2));
            setcookie("hash", $hash, time() + (86400 / 2));
            print_r(json_encode([true,$hash]));
            exit();
        }
        mysqli_close($link);
    } else {
        print_r(json_encode('proverka'));

    }
}


if($_GET['kind'] === "hash") {
    require_once '../conection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));

    if($link){

        $userId = $_GET['id'];
        $userHash = $_GET['hash'];

        $result = mysqli_query($link, "SELECT hash FROM users WHERE id=" . $userId . " LIMIT 1;");
        $data = mysqli_fetch_assoc($result);
        if($data['hash'] === $userHash){
            print_r(json_encode(true));
        }else{
            print_r(json_encode(false));
        }
        mysqli_close($link);
    }else {
        print_r(json_encode('proverka'));

    }
}