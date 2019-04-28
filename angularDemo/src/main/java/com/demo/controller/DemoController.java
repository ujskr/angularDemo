package com.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class DemoController {
	@RequestMapping("/home.html")
	public ModelAndView home() {
		return new ModelAndView("index");
	}
}
