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
              font-family: 'Roboto Regular';
              src: local('Roboto-Regular'), url(./fonts/Roboto-Regular.ttf) format('ttf');
            }
            @font-face {
              font-family: 'Roboto Light';
              src: local('Roboto-Light'), url(./fonts/Roboto-Light.ttf) format('ttf');
            }
            @font-face {
              font-family: 'Helvetica Condensed Regular';
              src: local('helvetica_condensed'), url(./fonts/helvetica_condensed.ttf) format('ttf');
            }
            @font-face {
              font-family: 'Helvetica 25 UltraLight Regular';
              src: local('HelveticaUltraLt'), url(./fonts/HelveticaUltraLt.ttf) format('ttf');
            }

            .title {
                font-family: 'Helvetica 25 UltraLight Regular' !important;
                font-size: 100px;
                color: #FFFFFF;
                position: relative;
                top: 28%;
            }
            .sub-title {
                font-family: 'Helvetica 25 UltraLight Regular' !important;
                font-size: 42px;
                color: #FFFFFF;
                position: relative;
                top: 27%;
            }
            .label-font {
                font-family: 'Roboto Regular' !important;
            }
            .input-font {
                font-family: 'Helvetica Condensed Regular' !important;
            }
            nav {
                font-family: 'Roboto Regular' !important;
            }
            nav .navbar-nav a{
              color: white !important;
            }
            .form-wrapper .sub-title, .table-wrapper .sub-title{
                padding-top: 30px;
                padding-bottom: 30px;
            }
            .custom-color-blue {
                color: #29abe2;
            }
            .btn-custom {
                font-family: 'Helvetica 25 UltraLight Regular' !important;
                font-size: x-large !important;
                color: #29abe2 !important;
                background-color: #012d51 !important;
            }
            .th-info {
                font-family: 'Roboto Regular' !important;
                color: #012d51 !important;
            }
            .bg-full-blue{
                background-color: #29abe2;
                background-repeat: 'no-repeat'
            }
            .table-custom {
                border: transparent !important;
            }
            .td-info {
                font-family: ' Helvetica Condensed Regular' !important;
                color: #808080 !important;
            }
            input {
                color: #fff !important;
            } 
            label {
                color: #fff !important;
            }
            .footer-custom {
                font-family: 'Roboto Light' !important;
            }
            @media screen and (min-width: 992px) {
                .bg-1 {
                    background-image: url('./images/index-image.jpg');
                    background-repeat: no-repeat;
                }
                .bg-footer {
                    background-image: url('./images/rodape-desktop.jpg');
                    background-repeat: no-repeat;
                }
            }
            @media screen and (max-width: 991px) {
                .bg-1 {
                    background-image: url('./images/index-image-mobile.jpg');
                    background-repeat: no-repeat;
                    background-size: contain;
                }
                .bg-footer {
                    background-image: url('./images/rodape-mobile.jpg');
                    background-repeat: no-repeat;
                }
                nav {
                    margin: 0 auto !important;
                    max-width: 100% !important;
                    background-color: currentColor;
                }
            }
        </style>
    </head>
    <body>
        <div id="app"></div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>