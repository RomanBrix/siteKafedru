<?php

$from = $_GET['from'];
if($from === "news") {
    require_once 'conection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        // NEWS
        $result_ua = mysqli_query($link,
            "SELECT 
                    id, 
                    title_ua AS title, 
                    date_ua AS date, 
                    text_ua AS text, 
                    end_ua AS endof, 
                    img, 
                    file_src AS file 
                    FROM news ORDER BY id DESC ;");

        $result_eng = mysqli_query($link,
            "SELECT 
                    id, 
                    title_eng AS title, 
                    date_eng AS date, 
                    text_eng AS text, 
                    end_eng AS endof, 
                    img, 
                    file_src AS file
                    FROM news ORDER BY id DESC ;");

        $arr_ua = [];
        $arr_eng = [];
        while ($row = $result_ua->fetch_assoc()) {
            $obj_ua = (object)$row;
            array_push($arr_ua, $obj_ua);
        }
        while ($row = $result_eng->fetch_assoc()) {
            $obj = (object)$row;
            array_push($arr_eng, $obj);
        }


        //EVENTS ---------
        $events_ua = mysqli_query($link,
            "SELECT 
                    id, 
                    title_ua AS title, 
                    date_ua AS date, 
                    text_ua AS text, 
                    end_ua AS endof, 
                    img, 
                    file_src AS file 
                    FROM events ORDER BY id DESC ;");

        $events_eng = mysqli_query($link,
            "SELECT 
                    id, 
                    title_eng AS title, 
                    date_eng AS date, 
                    text_eng AS text, 
                    end_eng AS endof, 
                    img, 
                    file_src AS file
                    FROM events ORDER BY id DESC ;");

        $ev_ua = [];
        $ev_eng = [];
        while ($row = $events_ua->fetch_assoc()) {
            $obj_ev_ua = (object)$row;
            array_push($ev_ua, $obj_ev_ua);
        }
        while ($row = $events_eng->fetch_assoc()) {
            $obj_ev = (object)$row;
            array_push($ev_eng, $obj_ev);
        }

        //SUMM ---------
        print_r(json_encode([[$arr_ua, $arr_eng], [$ev_ua, $ev_eng]]));
        mysqli_close($link);
    }
} elseif ($from === "main"){
    require_once 'conection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        // NEWS
        $result_ua = mysqli_query($link,
            "SELECT 
                    id, 
                    title_ua AS title, 
                    date_ua AS date, 
                    text_ua AS text, 
                    end_ua AS endof, 
                    img, 
                    file_src AS file 
                    FROM news ORDER BY id DESC LIMIT 2 ;");

        $result_eng = mysqli_query($link,
            "SELECT 
                    id, 
                    title_eng AS title, 
                    date_eng AS date, 
                    text_eng AS text, 
                    end_eng AS endof, 
                    img, 
                    file_src AS file
                    FROM news ORDER BY id DESC LIMIT 2;");

        $arr_ua = [];
        $arr_eng = [];
        while ($row = $result_ua->fetch_assoc()) {
            $obj_ua = (object)$row;
            array_push($arr_ua, $obj_ua);
        }
        while ($row = $result_eng->fetch_assoc()) {
            $obj = (object)$row;
            array_push($arr_eng, $obj);
        }

        print_r(json_encode([$arr_ua, $arr_eng]));
        mysqli_close($link);
    }
} elseif ($from === "admin"){

    require_once 'conection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        // NEWS
        $result_news = mysqli_query($link, "SELECT  * FROM news ORDER BY id DESC ;");
        $result_events = mysqli_query($link, "SELECT  * FROM events ORDER BY id DESC ;");

        $arr_news = [];
        $arr_events = [];
        while ($row = $result_news->fetch_assoc()) {
            $obj_news = (object)$row;
            array_push($arr_news, $obj_news);
        }
        while ($row = $result_events->fetch_assoc()) {
            $obj_events = (object)$row;
            array_push($arr_events, $obj_events);
        }
        print_r(json_encode([$arr_news, $arr_events]));
        mysqli_close($link);
    }
    } else{
    echo "Po tebya yje vuehali!";
}


?>