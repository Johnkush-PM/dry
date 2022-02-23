function Test1()
{
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Selects the 'FamilyAlbum' item of the 'ProductNames' combo box.
  Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("FamilyAlbum");
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(55, 8);
  //Enters the text 'nmb' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("nmb");
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(12, 12);
  //Enters the text 'kkb' in the 'Street' text editor.
  Aliases.Orders.OrderForm.Group.Street.SetText("kkb");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Closes the 'MainForm' window.
  Aliases.Orders.MainForm.Close();
  //Clicks the 'btnNo' button.
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}