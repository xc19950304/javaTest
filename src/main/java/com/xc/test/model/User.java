package com.xc.test.model;

import java.io.Serializable;

public class User implements Serializable {

	private static final long serialVersionUID = 1L;
	private String id; // id
	private String username; // username
	private String password; // password
	//private Date creatTime; // creatTime
	
	public User() {
		super();
	}
	
	public User(String username,String password)
	{
		super();
		this.username = username;
		this.password = password;
	}
	
	public User(String id,String username, String password)
	{
		super();
		this.id = id;
		this.username = username;
		this.password = password;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return username;
	}

	public void setName(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	 public String toString() {   
	        return "User[id="+id+",username="+username+",password="+password+"]";   
	    }   

}