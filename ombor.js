// Imtihon sayti <-> ombor (Supabase). Bu kalit OCHIQ — saytda turishi normal.
(function(){
  var URL = "https://qubrgtzfjmpyojaltfnf.supabase.co";
  var KEY = "sb_publishable_32_AlXAqmxrZ0pr9UjFZJQ_XiNjsCy_";
  function rpc(nom, args){
    return fetch(URL + "/rest/v1/rpc/" + nom, {
      method: "POST",
      headers: { apikey: KEY, "Content-Type": "application/json" },
      body: JSON.stringify(args || {})
    }).then(function(r){
      return r.text().then(function(t){
        var d = t ? JSON.parse(t) : null;
        if (!r.ok) throw new Error((d && d.message) || ("HTTP " + r.status));
        return d;
      });
    });
  }
  function get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }
  function set(k, v){ try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch(e){} }
  window.OMBOR = { rpc: rpc, get: get, set: set };
})();
