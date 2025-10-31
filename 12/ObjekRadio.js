function radio_box(form)
{
var ket = "";
if (form.wanita.checked == true)
{
ket = "Wanita";
}
else
{
ket = "Pria";
}
alert('Anda adalah seorang ' +ket);
}