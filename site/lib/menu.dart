import 'package:flutter/material.dart';

import 'package:site/constants.dart';
import 'package:site/Components/drawer.dart';

class Menu extends StatefulWidget {
  const Menu({
    Key? key,
  }) : super(key: key);

  @override
  State<Menu> createState() => _MenuState();
}

class _MenuState extends State<Menu> {
  @override
  Widget build(BuildContext context) {
    final menuHamburgerButton = Container(
      alignment: Alignment.topLeft,
      padding: const EdgeInsets.only(top: 20, left: 20),
      child: ElevatedButton(
        key: UniqueKey(),
        onPressed: () {
          setState(() {
            showMenuButton = !showMenuButton;
          });
        }, // show a side menu like drawer
        style: ElevatedButton.styleFrom(
          elevation: 4,
          shape: RoundedRectangleBorder(
            borderRadius:
                BorderRadius.circular(defaultRoundedEdgeCircularRadius),
          ),
          padding: const EdgeInsets.only(top: 20, bottom: 20),
          backgroundColor: Colors.white,
          foregroundColor: Colors.black,
        ),
        child: const Icon(Icons.menu),
      ),
    );

    return AnimatedSwitcher(
      duration: const Duration(milliseconds: 400),
      child: showMenuButton ? menuHamburgerButton : drawer,
    );
  }
}
