package com.demo.controller;

import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class DemoController {
	@RequestMapping("/home.html")
	public ModelAndView home(@RequestHeader String a) {
		return new ModelAndView("index");
	}
}
