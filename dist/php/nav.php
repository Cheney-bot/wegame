<?php
    $page = $_REQUEST['page'];
    $label = $_REQUEST['label'];
    header('Content-Type:text/html;charset=utf-8');

    $link = mysqli_connect('localhost','root','123456','account');
    if(!$link){
        echo '{"err":-1,"msg":"连接失败"}';
        die();
    }
    if($label == 'faddish'){
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

    }else if($label == 'hot'){
        $all_sql = 'select * from hot_list';
        $all_res = mysqli_query($link,$all_sql);
        $total = mysqli_affected_rows($link);

        $start = ($page-1)*4;

        $page_sql = "select * from hot_list order by id limit $start,4";
        $page_res = mysqli_query($link,$page_sql);
        $page_arr = mysqli_fetch_all($page_res,1);
        $data = json_encode($page_arr);

        if($page_arr > 0){
            echo '{"err":1,"msg":"分页数据","total":'.$total.',"data":'.$data.'}';
        }else{
            echo '{"err":0,"msg":"暂无数据","total":"","data":""}';
        }
    }else if($label == 'newest'){
        $all_sql = 'select * from newest_list';
        $all_res = mysqli_query($link,$all_sql);
        $total = mysqli_affected_rows($link);

        $start = ($page-1)*4;

        $page_sql = "select * from newest_list order by id limit $start,4";
        $page_res = mysqli_query($link,$page_sql);
        $page_arr = mysqli_fetch_all($page_res,1);
        $data = json_encode($page_arr);

        if($page_arr > 0){
            echo '{"err":1,"msg":"分页数据","total":'.$total.',"data":'.$data.'}';
        }else{
            echo '{"err":0,"msg":"暂无数据","total":"","data":""}';
        }
    }else if($label == 'discount'){
        $all_sql = 'select * from discount_list';
        $all_res = mysqli_query($link,$all_sql);
        $total = mysqli_affected_rows($link);

        $start = ($page-1)*4;

        $page_sql = "select * from discount_list order by id limit $start,4";
        $page_res = mysqli_query($link,$page_sql);
        $page_arr = mysqli_fetch_all($page_res,1);
        $data = json_encode($page_arr);

        if($page_arr > 0){
            echo '{"err":1,"msg":"分页数据","total":'.$total.',"data":'.$data.'}';
        }else{
            echo '{"err":0,"msg":"暂无数据","total":"","data":""}';
        }
    }else if($label == 'basketball'){
        $all_sql = 'select * from basketball_list';
        $all_res = mysqli_query($link,$all_sql);
        $total = mysqli_affected_rows($link);

        $start = ($page-1)*4;

        $page_sql = "select * from basketball_list order by id limit $start,4";
        $page_res = mysqli_query($link,$page_sql);
        $page_arr = mysqli_fetch_all($page_res,1);
        $data = json_encode($page_arr);

        if($page_arr > 0){
            echo '{"err":1,"msg":"分页数据","total":'.$total.',"data":'.$data.'}';
        }else{
            echo '{"err":0,"msg":"暂无数据","total":"","data":""}';
        }
    }else if($label == 'single'){
        $all_sql = 'select * from single_list';
        $all_res = mysqli_query($link,$all_sql);
        $total = mysqli_affected_rows($link);

        $start = ($page-1)*4;

        $page_sql = "select * from single_list order by id limit $start,4";
        $page_res = mysqli_query($link,$page_sql);
        $page_arr = mysqli_fetch_all($page_res,1);
        $data = json_encode($page_arr);

        if($page_arr > 0){
            echo '{"err":1,"msg":"分页数据","total":'.$total.',"data":'.$data.'}';
        }else{
            echo '{"err":0,"msg":"暂无数据","total":"","data":""}';
        }
    }else if($label == 'online'){
        $all_sql = 'select * from online_list';
        $all_res = mysqli_query($link,$all_sql);
        $total = mysqli_affected_rows($link);

        $start = ($page-1)*4;

        $page_sql = "select * from online_list order by id limit $start,4";
        $page_res = mysqli_query($link,$page_sql);
        $page_arr = mysqli_fetch_all($page_res,1);
        $data = json_encode($page_arr);

        if($page_arr > 0){
            echo '{"err":1,"msg":"分页数据","total":'.$total.',"data":'.$data.'}';
        }else{
            echo '{"err":0,"msg":"暂无数据","total":"","data":""}';
        }
    }else if($label == 'athletics'){
        $all_sql = 'select * from athletics_list';
        $all_res = mysqli_query($link,$all_sql);
        $total = mysqli_affected_rows($link);

        $start = ($page-1)*4;

        $page_sql = "select * from athletics_list order by id limit $start,4";
        $page_res = mysqli_query($link,$page_sql);
        $page_arr = mysqli_fetch_all($page_res,1);
        $data = json_encode($page_arr);

        if($page_arr > 0){
            echo '{"err":1,"msg":"分页数据","total":'.$total.',"data":'.$data.'}';
        }else{
            echo '{"err":0,"msg":"暂无数据","total":"","data":""}';
        }
    }


?>