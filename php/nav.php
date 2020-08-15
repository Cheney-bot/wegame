<?php
    $type = $_REQUEST['type'];
    $page = $_REQUEST['page'];
    $id = $_REQUEST['id'];
    $signname = $_REQUEST['signname'];
    $person = $_REQUEST['person'];
    $price = $_REQUEST['price'];
    $time = $_REQUEST['time'];
    $mytype = $_REQUEST['mytype'];
    header('Content-Type:text/html;charset=utf-8');

    $link = mysqli_connect('localhost','root','123456','account');
    if(!$link){
        echo '{"err":-1,"msg":"连接失败"}';
        die();
    }
    if($type == 'page'){
        $all_sql = 'select * from wegame_list';
        $all_res = mysqli_query($link,$all_sql);
        $total = mysqli_affected_rows($link);

        $start = ($page-1)*4;

        $page_sql = "select * from wegame_list order by id limit $start,4";
        $page_res = mysqli_query($link,$page_sql);
        $page_arr = mysqli_fetch_all($page_res,1);
        $data = json_encode($page_arr);

        if($page_arr > 0){
            echo '{"err":1,"msg":"分页数据","total":'.$total.',"data":'.$data.'}';
        }else{
            echo '{"err":0,"msg":"暂无数据","total":"","data":""}';
        }
    }else{
        echo '{"err":0,"msg":"参数错误"}';
    }

?>