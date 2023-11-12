export const getPostDelay2 = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result: Post[] = await response.json();
  await wait(2000);
  return result;
};

export const getPostDelay4 = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result: Post[] = await response.json();
  await wait(4000);
  return result;
};

export const getPostError = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result: Post[] = await response.json();
  await wait(2000);
  throw new Error("Custom Error");
  return result;
};

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
