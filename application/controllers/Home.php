<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
	public function about()
	{
        echo "Hi";
        exit();
        
        $data = array();
		$data['maincontent'] = $this->load->view('admin/pages/about', '', true);
        $this->load->view('master',$data);
	}
}
