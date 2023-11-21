function signIn() {
  let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  let form = document.createElement("form");
  form.setAttribute("method", "GET");
  form.setAttribute("action", oauth2Endpoint);

  let params = {
    client_id:
      "935730118226-2072l1nptia2n1rsqf462s38c43s66s2.apps.googleusercontent.com",
    redirect_uri: "http://127.0.0.1:5500/profile.html",
    response_type: "token",
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
    include_granted_scopes: "true",
    state: "pass-through-value",
    prompt: "consent",
  };

  for (let p in params) {
    let input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    form.appendChild(input);
  }

  document.body.appendChild(form);

  form.submit();
}
