package co.edu.unbosque.parcialFinal.service;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import co.edu.unbosque.parcialFinal.dto.SimpsonDTO;

public class ExternalHTTPRequestHandler {

	private static final HttpClient HTTP_CLIENT = HttpClient.newBuilder()
			.version(HttpClient.Version.HTTP_2)
			.followRedirects(HttpClient.Redirect.NORMAL)
			.connectTimeout(Duration.ofSeconds(10))
			.build();

	
	
	
	
	
	public static List<SimpsonDTO> doGetAndConvertToDtoList(String url) {
		HttpRequest request = HttpRequest.newBuilder().GET().uri(URI.create(url))
				.header("Content-Type", "application/json").build();

		HttpResponse<String> response = null;
		try {
			response = HTTP_CLIENT.send(request, HttpResponse.BodyHandlers.ofString());
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		String json = response.body();
		List<SimpsonDTO> list = Arrays.asList(new GsonBuilder().create().fromJson(json, SimpsonDTO.class));

		return list;

	}

	
	public static HttpResponse<String> ejecutarGet(String url) {
		HttpRequest request = HttpRequest.newBuilder()
				.GET()
				.uri(URI.create(url))
				.header("Accept", "application/json")
				.timeout(Duration.ofSeconds(15))
				.build();

		try {
			return HTTP_CLIENT.send(request, HttpResponse.BodyHandlers.ofString());
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			Thread.currentThread().interrupt();
			e.printStackTrace();
		}
		return null;
	}

	
	public static HttpResponse<String> ejecutarGetConApiKey(String url, String headerName, String apiKey) {
		HttpRequest request = HttpRequest.newBuilder()
				.GET()
				.uri(URI.create(url))
				.header("Accept", "application/json")
				.header(headerName, apiKey)
				.timeout(Duration.ofSeconds(15))
				.build();

		try {
			return HTTP_CLIENT.send(request, HttpResponse.BodyHandlers.ofString());
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			Thread.currentThread().interrupt();
			e.printStackTrace();
		}
		return null;
	}

	
	public static HttpResponse<String> ejecutarPost(String url, String jsonBody) {
		HttpRequest request = HttpRequest.newBuilder()
				.POST(HttpRequest.BodyPublishers.ofString(jsonBody))
				.uri(URI.create(url))
				.header("Accept", "application/json")
				.header("Content-Type", "application/json")
				.timeout(Duration.ofSeconds(15))
				.build();

		try {
			return HTTP_CLIENT.send(request, HttpResponse.BodyHandlers.ofString());
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			Thread.currentThread().interrupt();
			e.printStackTrace();
		}
		return null;
	}

	
	public static HttpResponse<String> ejecutarPut(String url, String jsonBody) {
		HttpRequest request = HttpRequest.newBuilder()
				.PUT(HttpRequest.BodyPublishers.ofString(jsonBody))
				.uri(URI.create(url))
				.header("Accept", "application/json")
				.header("Content-Type", "application/json")
				.timeout(Duration.ofSeconds(15))
				.build();

		try {
			return HTTP_CLIENT.send(request, HttpResponse.BodyHandlers.ofString());
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			Thread.currentThread().interrupt();
			e.printStackTrace();
		}
		return null;
	}

	
	public static HttpResponse<String> ejecutarDelete(String url) {
		HttpRequest request = HttpRequest.newBuilder()
				.DELETE()
				.uri(URI.create(url))
				.header("Accept", "application/json")
				.timeout(Duration.ofSeconds(15))
				.build();

		try {
			return HTTP_CLIENT.send(request, HttpResponse.BodyHandlers.ofString());
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			Thread.currentThread().interrupt();
			e.printStackTrace();
		}
		return null;
	}


	public static String codificar(String texto) {
		return URLEncoder.encode(texto.trim(), StandardCharsets.UTF_8).replace("+", "%20");
	}

	public static String prettyPrintUsingGson(String uglyJson) {
		Gson gson = new GsonBuilder().setLenient().setPrettyPrinting().create();
		JsonElement jsonElement = JsonParser.parseString(uglyJson);
		return gson.toJson(jsonElement);
	}

	public static String getString(JsonObject obj, String key) {
		JsonElement el = obj.get(key);
		return (el != null && el.isJsonPrimitive()) ? el.getAsString() : null;
	}

	public static long getLong(JsonObject obj, String key) {
		JsonElement el = obj.get(key);
		return (el != null && el.isJsonPrimitive()) ? el.getAsLong() : 0;
	}

	public static double getDouble(JsonObject obj, String key) {
		JsonElement el = obj.get(key);
		return (el != null && el.isJsonPrimitive()) ? el.getAsDouble() : 0;
	}

	public static int getInt(JsonObject obj, String key) {
		JsonElement el = obj.get(key);
		return (el != null && el.isJsonPrimitive()) ? el.getAsInt() : 0;
	}

	public static List<String> getStringList(JsonObject obj, String key) {
		List<String> lista = new ArrayList<>();
		JsonElement el = obj.get(key);
		if (el != null && el.isJsonArray()) {
			for (JsonElement item : el.getAsJsonArray()) {
				if (item.isJsonPrimitive()) {
					lista.add(item.getAsString());
				}
			}
		}
		return lista;
	}
}