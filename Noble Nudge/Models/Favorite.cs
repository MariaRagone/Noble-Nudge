using System;
using System.Collections.Generic;

namespace Noble_Nudge.Models;

public partial class Favorite
{
    public int FavoriteId { get; set; }

    public string? UserGoogleId { get; set; }

    public int? NobeId { get; set; }
}
