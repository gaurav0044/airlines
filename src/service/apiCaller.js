export const ApiCaller = {
    getList: async (pageNo) => {
        try {
          const response = await fetch(
            `https://api.instantwebtools.net/v1/passenger?page=${pageNo}&size=10`
          );
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
          return error;
        }
    }
}