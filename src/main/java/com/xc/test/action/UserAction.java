package com.xc.test.action;


import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.xc.test.model.User;
import com.xc.test.service.UserService;
import com.xc.test.utils.SpringContextHolder;

/*
 * @Controller类中的方法可以直接通过返回String跳转到jsp、ftl、html等模版页面。在方法上加@ResponseBody注解，也可以返回实体对象。
@RestController类中的所有方法只能返回String、Object、Json等实体对象，不能跳转到模版页面。
@RestController相当于@ResponseBody + @Controller,@RestController中的方法如果想跳转页面，则用ModelAndView进行封装
 */
/*当实现一个RESTful web services的时候，response将一直通过response body发送。为了简化开发，Spring 4.0提供了一个RestController*/
@RestController
@RequestMapping(value = "/html/UserAction.do")
public class UserAction {

	private UserService us = (UserService) SpringContextHolder.getBean("userService");

	@RequestMapping(params = "action=login", method = RequestMethod.POST)
	public boolean login(String username,String password,HttpServletRequest request) throws IOException{
		User user = new User(username,password);
		boolean tag = false;
		tag = us.login(user,request);
		return tag;
		/*System.out.println("1111");
		User p = us.findOne(name,password);
		//SpringMVC返回json格式对象一种方式，同时可以定义Http头和HttpStatus
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.TEXT_PLAIN);
		return new ResponseEntity<User>(p,headers, HttpStatus.OK);
		//return new ResponseEntity<Person>(headers, HttpStatus.OK);*/
	}

	@RequestMapping(params = "action=checkLoginState", method = RequestMethod.POST)
	public boolean check(String username,String password,HttpServletRequest request)
	{
		User user = new User(username,password);
		boolean tag = false;
		tag = us.checkUserState(user,request);
		return tag;
	}
}
