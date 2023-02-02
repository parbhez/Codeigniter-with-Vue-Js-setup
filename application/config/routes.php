<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['about'] =  'welcome/about_page';
$route['contact'] =  'welcome/contact';
$route['manage-post'] =  'welcome/manage_post';
