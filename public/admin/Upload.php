<?php
/**
 * Created by PhpStorm.
 * User: RomkaBrix
 * Date: 2/19/18
 * Time: 14:09
 */

if ( 0 < $_FILES['file']['error'] ) {
    echo 'Error: ' . $_FILES['image']['error'] . '<br>';
}
else {
    move_uploaded_file($_FILES['image']['tmp_name'], '../src/news/' . $_FILES['image']['name']);
    print_r(json_encode($_FILES['image']['name'])) ;
}