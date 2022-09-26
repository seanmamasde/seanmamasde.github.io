import 

abstract class ThemeEvent extends Equatable {
  final bool isDarkMode;
  const ThemeEvent(this.isDarkMode);

  @override
  List<Object> get props => [];
}

class ThemeChange extends ThemeEvent {
  ThemeChange(bool isDarkMode) : super(isDarkMode);
}
