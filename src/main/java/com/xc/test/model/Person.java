package com.xc.test.model;
import java.io.Serializable;


public class Person implements Serializable {

	private static final long serialVersionUID = 3617931430808763429L;
	
	private String id;   
    private String name;
    private String sex;
    private String nativePlace;
    private int age;
	public Person() {
		super();
	}
	public Person(String id, String name, int age, String sex, String nativePlace) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.nativePlace = nativePlace;
	}
	
	public Person(String name, String sex, String nativePlace, int age) {
		super();
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.nativePlace = nativePlace;
	}
	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the age
	 */
	public int getAge() {
		return age;
	}
	/**
	 * @param age the age to set
	 */
	public void setAge(int age) {
		this.age = age;
	}  
	
	public String getSex() {
		return sex;
	}
	/**
	 * @param id the id to set
	 */
	public void setSex(String sex) {
		this.sex = sex;
	}
	
	public String getNativePlace() {
		return nativePlace;
	}
	/**
	 * @param id the id to set
	 */
	public void setNativePlace(String nativePlace) {
		this.nativePlace = nativePlace;
	}

	 public String toString() {   
	        return "Person[id="+id+",name="+name+",age="+age+",sex="+sex+",nativePlace="+nativePlace+"]";   
	    }   
}