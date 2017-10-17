package com.xc.test.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.xc.test.dao.UserDao;
import com.xc.test.model.User;

@Service
public class UserService extends BaseService{
	
	@Autowired
	@Qualifier("userDao")
	private  UserDao ud;
	
	public boolean login(User user, HttpServletRequest request)
	{
		User user1 = ud.findOne(user.getName(), user.getPassword());
		if(user1 == null)
			return false;
		else
		{
			HttpSession session = request.getSession(true);
			session.setAttribute("user", user1);
			 //获取session的Id
			 String sessionId = session.getId();
	          //判断session是不是新创建的
	         if (session.isNew()) {
	              System.out.println("session创建成功，session的id是："+sessionId);
	          }else {
	        	  System.out.println("服务器已经存在该session了，session的id是："+sessionId);
	          }
				return true;
		}
	}
	
	public boolean checkUserState(User user,HttpServletRequest request)
	{
	    HttpSession session = request.getSession();
	    User u = (User) session.getAttribute("user");
	    if(user == null)
	    	return false;
	    if(u.getName().equals(user.getName()) && u.getPassword().equals(user.getPassword()))
	    	return true;
	    else
	    	return false;
		
	}

}
