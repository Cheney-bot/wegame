<?php
    $type = $_REQUEST['type'];
    $user = $_REQUEST['user'];
    $pass = $_REQUEST['pass'];

    header('Content-Type:text/html;charset=utf-8');

    $link = mysqli_connect('localhost','root','123456','account');

    if(!$link){
        echo '连接失败！！';
        die();
    }
    mysqli_set_charset($link,'utf8');

    if($type == 'login'){
        $login_sql = "select * from account where user = '$user' and pass = '$pass'";
        $login_res = mysqli_query($link,$login_sql);

        $rows1 = mysqli_affected_rows($link);
        if($rows1 > 0){
            echo '{"err":1,"msg":"登录成功"}';
        }else{
            echo '{"err":-1,"msg":"账号或密码不正确"}';
        }
    }

    if($type == 'add'){
        $add_sql = "select * from account where user ='$user'";
        $add_res = mysqli_query($link,$add_sql);
        $rows2 = mysqli_affected_rows($link);
        if($rows2 > 0){
            echo '{"err"：2,"msg":"该账户已被注册"}';
            die();
        }else{
            $add_sql2 = "insert into account(user,pass) value('$user','$pass')";
            $add_res2 = mysqli_query($link,$add_sql2);
            $nums = mysqli_affected_rows($link);
            if($nums > 0){
                echo '{"err":3,"msg":"注册成功"}';
            }else{
                echo '{"err":4,"msg":"注册失败"}';
            }
        }
    }
    mysqli_close($link);

?>