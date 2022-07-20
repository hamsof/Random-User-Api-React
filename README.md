## Random person Api Usage

```
 a.get("https://randomuser.me/api/")
    .then(res=> setData(res.data.results[0]))
    .catch(err=>console.log(err))

```
