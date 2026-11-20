package co.edu.unbosque.parcialFinal.dto;

public class SimpsonDTO {
	
	private long id;
	private int age;
	private String gender;
	private String name;
	private String portrait_path;
	
	public SimpsonDTO() {
		// TODO Auto-generated constructor stub
	}
	
	

	public SimpsonDTO(long id, int age, String gender, String name, String portrait_path) {
		super();
		this.id = id;
		this.age = age;
		this.gender = gender;
		this.name = name;
		this.portrait_path = portrait_path;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPortrait_path() {
		return portrait_path;
	}

	public void setPortrait_path(String portrait_path) {
		this.portrait_path = portrait_path;
	}



	@Override
	public String toString() {
		return "SimpsonDTO [id=" + id + ", age=" + age + ", gender=" + gender + ", name=" + name + ", portrait_path="
				+ portrait_path + "]";
	}
	
	
	
	

}
