public class Animal {
	private String species = "cat";
	private String name;
	private String call = "meow";
	
	public Animal() {
		this.name = "(Unnamed stray animal)";
	}
	
	public Animal(String species, String name, String call) {
		this.species = species;
		this.name = name;
		this.call = call;
	}

	public String getSpecies() {
		return species;
	}

	public void setSpecies(String species) {
		this.species = species;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCall() {
		return call;
	}
	
	public String useCall() {
		return (name + " goes " + call);
	}

	public void setCall(String call) {
		this.call = call;
	}
}
