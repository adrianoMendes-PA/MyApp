// Definição da URL base
const baseURL = process.env.DEV_API;

interface FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  body?: object;
  token?: string;
}

export async function apiRequest<T>({
  method,
  endpoint,
  body,
  token,
}: FetchOptions): Promise<T> {
  const headers: Record<string, string> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // Formando a URL completa
  const fullUrl = `${baseURL}${endpoint}`;

  // Adicionando logs para depuração
  console.log('API URL:', fullUrl); // Mostra a URL completa
  console.log('Request Method:', method); // Mostra o método (GET, POST, etc.)
  console.log('Headers:', headers); // Mostra os headers
  console.log('Request Payload:', body); // Mostra os dados que estão sendo enviados

  try {
    // Adicionando o setTimeout com atraso de 100ms
    await new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 100); // Atraso de 100ms
    });
    const response = await fetch(fullUrl, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    // Se a resposta não for ok, captura os detalhes
    if (!response.ok) {
      const errorDetails = await response.text(); // Obtendo detalhes do erro
      throw new Error(
        `HTTP Error: ${response.status} ${response.statusText} - ${errorDetails}`,
      );
    }

    // Retorna a resposta como JSON
    return (await response.json()) as T;
  } catch (error) {
    console.error('API Request failed:', error);
    throw error;
  }
}
