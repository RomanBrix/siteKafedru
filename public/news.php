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
                    date_ua AS data, 
                    text_ua AS text, 
                    end_ua AS endof, 
                    img, 
                    file_src AS file 
                    FROM news ORDER BY id DESC ;");

        $result_eng = mysqli_query($link,
            "SELECT 
                    id, 
                    title_eng AS title, 
                    date_eng AS data, 
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
                    date_ua AS data, 
                    text_ua AS text, 
                    end_ua AS endof, 
                    img, 
                    file_src AS file 
                    FROM events ORDER BY id DESC ;");

        $events_eng = mysqli_query($link,
            "SELECT 
                    id, 
                    title_eng AS title, 
                    date_eng AS data, 
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
                    date_ua AS data, 
                    text_ua AS text, 
                    end_ua AS endof, 
                    img, 
                    file_src AS file 
                    FROM news ORDER BY id DESC LIMIT 2 ;");

        $result_eng = mysqli_query($link,
            "SELECT 
                    id, 
                    title_eng AS title, 
                    date_eng AS data, 
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
} else{
    echo "Po tebya yje vuehali!";
}


?>