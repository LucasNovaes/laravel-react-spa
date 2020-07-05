<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Estágio - Prova de seleção</title>
        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <style>
            @font-face {
              font-family: 'Roboto-Regular';
              src: local('Roboto-Regular'), url(./fonts/Roboto-Regular.ttf) format('ttf');
            }
            .title {
                font-size: 100px;
                color: #FFFFFF;
                position: relative;
                top: 28%;
            }
            .sub-title {
                font-size: 42px;
                color: #FFFFFF;
                position: relative;
                top: 27%;
            }
            nav .navbar-nav a{
              color: white !important;
            }
            .form-wrapper .sub-title, .table-wrapper .sub-title{
                padding-top: 40px;
                padding-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div id="app"></div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>