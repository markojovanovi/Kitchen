<?php
return [
    'custom' => [
        'mainLayoutType' => 'vertical', // Options[String]: vertical(default), horizontal
        'theme' => 'light', // options[String]: 'light'(default), 'dark', 'semi-dark' (warning:semi-dark option not applies to the horizontal theme)
        'sidebarCollapsed' => false, // options[Boolean]: true, false(default) (warning:this option only applies to the vertical theme.)
        'navbarColor' => '', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'floating', // options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'floating', // options[String]: floating(default) / static / sticky / hidden (Warning:this option only applies to the vertical theme)
        'footerType' => 'static', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]: default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar (warning:use this option if your whole project with sidenav Otherwise override this option as page level )
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'blankPage' => false, // options[Boolean]: true, false(default) (warning:only make true if your whole project without navabr and sidebar otherwise override option page wise)
        'direction' => env('MIX_CONTENT_DIRECTION', 'ltr'), // Options[String]: ltr(default), rtl
    ],
    'demo-1' => [
        'theme' => 'light', // options[String]: 'light'(default), 'dark', 'semi-dark'
        'sidebarCollapsed' => false, // options[Boolean]: true, false(default)
        'navbarColor' => '', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'fixed', //// options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'floating', // options[String]: floating(default) / static / sticky / hidden
        'footerType' => 'static', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]:  default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar
        'blankPage' => false, // options[Boolean]: true, false(default)
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'mainLayoutType' => 'vertical', // Options[String]: horizontal, vertical(default)
        'direction' => env('MIX_CONTENT_DIRECTION', 'ltr'), // Options[String]: ltr(default), rtl
    ],
    'demo-2' => [
        'theme' => 'dark', // options[String]: 'light'(default), 'dark', 'semi-dark'
        'sidebarCollapsed' => false, // options[Boolean]: true, false(default)
        'navbarColor' => '', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'fixed', //// options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'floating', // options[String]: floating(default) / static / sticky / hidden
        'footerType' => 'static', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]:  default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar
        'blankPage' => false, // options[Boolean]: true, false(default)
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'mainLayoutType' => 'vertical', // Options[String]: horizontal, vertical(default)
        'direction' => env('MIX_CONTENT_DIRECTION', 'ltr'), // Options[String]: ltr(default), rtl
    ],
    'demo-3' => [
        'theme' => 'light', // options[String]: 'light'(default), 'dark', 'semi-dark'
        'sidebarCollapsed' => true, // options[Boolean]: true, false(default)
        'navbarColor' => 'bg-warning', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'fixed', //// options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'hidden', // options[String]: floating(default) / static / sticky / hidden
        'footerType' => 'hidden', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]:  default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar
        'blankPage' => false, // options[Boolean]: true, false(default)
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'mainLayoutType' => 'vertical', // Options[String]: horizontal, vertical(default)
        'direction' => env('MIX_CONTENT_DIRECTION', 'ltr'), // Options[String]: ltr(default), rtl
    ],
    'demo-4' => [
        'theme' => 'semi-dark', // options[String]: 'light'(default), 'dark', ''
        'sidebarCollapsed' => false, // options[Boolean]: true, false(default)
        'navbarColor' => '', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'fixed', //// options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'floating', // options[String]: floating(default) / static / sticky / hidden
        'footerType' => 'static', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]:  default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar
        'blankPage' => false, // options[Boolean]: true, false(default)
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'mainLayoutType' => 'vertical', // Options[String]: horizontal, vertical(default)
        'direction' => env('MIX_CONTENT_DIRECTION', 'ltr'), // Options[String]: ltr(default), rtl
    ],
    'demo-5' => [
        'theme' => 'light', // options[String]: 'light'(default), 'dark', ''
        'sidebarCollapsed' => false, // options[Boolean]: true, false(default)
        'navbarColor' => '', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'fixed', //// options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'floating', // options[String]: floating(default) / static / sticky / hidden
        'footerType' => 'static', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]:  default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar
        'blankPage' => false, // options[Boolean]: true, false(default)
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'mainLayoutType' => 'horizontal', // Options[String]: horizontal, vertical(default)
        'direction' => env('MIX_CONTENT_DIRECTION', 'ltr'), // Options[String]: ltr(default), rtl
    ],
    'demo-6' => [
        'theme' => 'dark', // options[String]: 'light'(default), 'dark', ''
        'sidebarCollapsed' => false, // options[Boolean]: true, false(default)
        'navbarColor' => '', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'fixed', //// options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'floating', // options[String]: floating(default) / static / sticky / hidden
        'footerType' => 'static', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]:  default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar
        'blankPage' => false, // options[Boolean]: true, false(default)
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'mainLayoutType' => 'horizontal', // Options[String]: horizontal, vertical(default)
        'direction' => env('MIX_CONTENT_DIRECTION', 'ltr'), // Options[String]: ltr(default), rtl
    ],
    'demo-7' => [
        'theme' => 'light', // options[String]: 'light'(default), 'dark', 'semi-dark'
        'sidebarCollapsed' => false, // options[Boolean]: true, false(default)
        'navbarColor' => '', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'fixed', //// options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'floating', // options[String]: floating(default) / static / sticky / hidden
        'footerType' => 'static', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]:  default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar
        'blankPage' => false, // options[Boolean]: true, false(default)
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'mainLayoutType' => 'vertical', // Options[String]: horizontal, vertical(default)
        'direction' => env('MIX_CONTENT_DIRECTION', 'rtl'), // Options[String]: ltr(default), rtl
    ],
    'demo-8' => [
        'theme' => 'dark', // options[String]: 'light'(default), 'dark', 'semi-dark'
        'sidebarCollapsed' => false, // options[Boolean]: true, false(default)
        'navbarColor' => '', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'fixed', //// options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'floating', // options[String]: floating(default) / static / sticky / hidden
        'footerType' => 'static', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]:  default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar
        'blankPage' => false, // options[Boolean]: true, false(default)
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'mainLayoutType' => 'vertical', // Options[String]: horizontal, vertical(default)
        'direction' => env('MIX_CONTENT_DIRECTION', 'rtl'), // Options[String]: ltr(default), rtl
    ],
    'demo-9' => [
        'theme' => 'light', // options[String]: 'light'(default), 'dark', 'semi-dark'
        'sidebarCollapsed' => true, // options[Boolean]: true, false(default)
        'navbarColor' => '', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'fixed', //// options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'floating', // options[String]: floating(default) / static / sticky / hidden
        'footerType' => 'static', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]:  default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar
        'blankPage' => false, // options[Boolean]: true, false(default)
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'mainLayoutType' => 'vertical', // Options[String]: horizontal, vertical(default)
        'direction' => env('MIX_CONTENT_DIRECTION', 'rtl'), // Options[String]: ltr(default), rtl
    ],
    'demo-10' => [
        'theme' => 'semi-dark', // options[String]: 'light'(default), 'dark', ''
        'sidebarCollapsed' => false, // options[Boolean]: true, false(default)
        'navbarColor' => '', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'fixed', //// options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'floating', // options[String]: floating(default) / static / sticky / hidden
        'footerType' => 'static', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]:  default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar
        'blankPage' => false, // options[Boolean]: true, false(default)
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'mainLayoutType' => 'vertical', // Options[String]: horizontal, vertical(default)
        'direction' => env('MIX_CONTENT_DIRECTION', 'rtl'), // Options[String]: ltr(default), rtl
    ],
    'demo-11' => [
        'theme' => 'light', // options[String]: 'light'(default), 'dark', ''
        'sidebarCollapsed' => false, // options[Boolean]: true, false(default)
        'navbarColor' => '', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'fixed', //// options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'floating', // options[String]: floating(default) / static / sticky / hidden
        'footerType' => 'static', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]:  default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar
        'blankPage' => false, // options[Boolean]: true, false(default)
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'mainLayoutType' => 'horizontal', // Options[String]: horizontal, vertical(default)
        'direction' => env('MIX_CONTENT_DIRECTION', 'rtl'), // Options[String]: ltr(default), rtl
    ],
    'demo-12' => [
        'theme' => 'dark', // options[String]: 'light'(default), 'dark', ''
        'sidebarCollapsed' => false, // options[Boolean]: true, false(default)
        'navbarColor' => '', // options[String]: bg-primary, bg-info, bg-warning, bg-success, bg-danger, bg-dark (default: '' for #fff)
        'horizontalMenuType' => 'fixed', //// options[String]: floating(default) / static /sticky (Warning:this option only applies to the Horizontal theme.)
        'verticalMenuNavbarType' => 'floating', // options[String]: floating(default) / static / sticky / hidden
        'footerType' => 'static', // options[String]: static(default) / sticky / hidden
        'bodyClass' => '', // add custom class
        'pageHeader' => true, // options[Boolean]: true(default), false (Page Header for Breadcrumbs)
        'contentLayout' => 'default', // options[String]:  default, content-left-sidebar, content-right-sidebar, content-detached-left-sidebar, content-detached-right-sidebar
        'blankPage' => false, // options[Boolean]: true, false(default)
        'defaultLanguage'=>'en',    //en(default)/de/pt/fr here are four optional language provided in theme
        'mainLayoutType' => 'horizontal', // Options[String]: horizontal, vertical(default)
        'direction' => env('MIX_CONTENT_DIRECTION', 'rtl'), // Options[String]: ltr(default), rtl
    ],
];

/* Do changes in this file if you know what it effects to your template. For more infomation refer the <a href="https://pixinvent.com/demo/vuexy-bootstrap-laravel-admin-template//documentation/documentation-laravel.html"> documentation </a> */
