<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function index()
	{
		$data= array();
        $data['maincontent']= $this->load->view('admin/pages/home', '', true);
		$this->load->view('master',$data);
	}

	public function about_page()
	{
		$data = array();
		$data['maincontent'] = $this->load->view('admin/pages/about', '', true);
		$this->load->view('master', $data); 
	}

	public function contact()
	{
		$data = array();
		$data['maincontent'] = $this->load->view('admin/pages/contact', '', true);
		$this->load->view('master', $data); 
	}

}
